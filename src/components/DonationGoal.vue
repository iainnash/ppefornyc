<template>
<div>
  <div class="bg-white container" v-if="amount">
    <div :class="`progress-bg cont h-14 flex flex-initial font-size-xxlg ${show ? 'shown-bar' : 'hidden-bar'}`">
      <div class="progress-bar p-4 bg-black text-white overflow-hidden position-relative" :style="`${show ? `width: ${(amount/4200.0)*100}%;` : ''}`">
        <h3 class="whitespace-no-wrap raised">${{Number(amount).toLocaleString()}}&nbsp;raised</h3>
      </div>

      <h3 class="goal p-4 bg-white w-auto color-black">Goal: $4,200</h3>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "donation-goal",
  mounted() {
    this.load();
    
    window.setInterval(this.load.bind(this), 5000);
  },
  methods: {
    showBanner() {
      this.show = true;
    },
    load() {
      fetch("https://iain-viralbeats.builtwithdark.com/total")
        .then(resp => resp.json())
        .then(resp => {
          window.setTimeout(this.showBanner.bind(this), 10);
          this.amount = resp.amount;
        });
    }
  },
  data() {
    return {
      amount: null,
      show: false,
    };
  }
};
</script>
<style scoped>

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari and Chrome */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.progress-bg .progress-bar {
  width: 0%;
  transition: width 2s ease-in;
}

/* @keyframes progress-bar {
  from {
    width: 0%;
  }
  to {
    width: 50%;
  }
} */

.cont {
  border: black 4px solid;
  transition: opacity 0.3s ease-in;
}
.progress-bg {
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.shown-bar {
  opacity: 1;
}
</style>