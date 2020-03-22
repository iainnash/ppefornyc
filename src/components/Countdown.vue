<template>
  <div class="flip-clock"  @click="update">
    <tracker 
      v-for="tracker in trackers"
      :time="time"
      :property="tracker"
      v-bind:key="tracker.time"
    ></tracker>
  </div>
</template>
<script>
import Tracker from './Tracker';
import moment from 'moment';

export default {
  props: ['date','callback'],

  data: () => ({
    time: {},
    i: 0,
    trackers: ['Days', 'Hours','Minutes','Seconds'] //'Random', 
  }),

  components: {
    Tracker,
  },
  
  beforeDestroy(){
    if ( window['cancelAnimationFrame'] ) {
      cancelAnimationFrame(this.frame);
    }
  },
  
  watch: {
    'date': function(newVal){
      this.setCountdown(newVal);
    }
  },
  
  mounted() {
    if ( window['requestAnimationFrame'] ) {
      this.setCountdown(this.date);
      this.update();
    }
  },
  
  methods: {
    
    setCountdown(date){
      
      if ( date ) {
        this.countdown = moment(date, 'YYYY-MM-DD HH:mm:ss');
      } else {
        this.countdown = moment().endOf('day');  //this.$el.getAttribute('data-date');
      }
    },
    
    update() {
      this.frame = requestAnimationFrame(this.update.bind(this));
      if ( this.i++ % 10 ) { return; }
      var t = moment(new Date());
      // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
      if ( this.countdown ) { 
        
        t = this.countdown.diff(t);
        
        //t = this.countdown.diff(t);//.getTime();
        //console.log(t);
        this.time.Days = Math.floor(t / (1000 * 60 * 60 * 24));
        this.time.Hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        this.time.Minutes = Math.floor((t / 1000 / 60) % 60);
        this.time.Seconds = Math.floor((t / 1000) % 60);
      } else {
        this.time.Days = undefined;
        this.time.Hours = t.hours() % 13;
        this.time.Minutes = t.minutes();
        this.time.Seconds = t.seconds();
      }
      
      this.time.Total = t;
      this.$emit('timeUpdate', this.time);
      
      return this.time;
    }
  }
}
</script>
<style scoped>
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEE;
}
.flip-clock {
  text-align: center;
  perspective: 600px;
  margin: 0 auto;
}
.flip-clock *,
.flip-clock *:before,
.flip-clock *:after {
  box-sizing: border-box;
}
.flip-clock__piece {
  display: inline-block;
  margin: 0 0.2vw;
}
@media (min-width: 1000px) {
  .flip-clock__piece {
    margin: 0 5px;
  }
}
.flip-clock__slot {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  /*
  //position: relative;
  //top: -1.6em;
  z-index: 10;
  //color: #FFF;
*/

}
.flip-card {
  display: block;
  position: relative;
  padding-bottom: 0.72em;
  font-size: 2.25rem;
  line-height: 0.95;
}
@media (min-width: 1000px) {
  .flip-clock__slot {
    font-size: 1.2rem;
  }
  .flip-card {
    font-size: 3rem;
  }
}
/*////////////////////////////////////////*/
.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  display: block;
  height: 0.72em;
  color: #ccc;
  background: #222;
  padding: 0.23em 0.25em 0.4em;
  border-radius: 0.15em 0.15em 0 0;
  backface-visiblity: hidden;
  transform-style: preserve-3d;
  width: 1.8em;
}
.flip-card__bottom,
.flip-card__back-bottom {
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 0.15em 0.15em;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}
.flip-card__back-bottom {
  z-index: 1;
}
.flip-card__bottom::after,
.flip-card__back-bottom::after {
  display: block;
  margin-top: -0.72em;
}
.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after {
  content: attr(data-value);
}
.flip-card__back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}
.flip-card__back::before {
  position: relative;
  overflow: hidden;
  z-index: -1;
}
.flip .flip-card__back::before {
  z-index: 1;
  animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}
.flip .flip-card__bottom {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}
@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%,
  99% {
    opacity: 1;
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
    z-index: 5;
  }
}


</style>