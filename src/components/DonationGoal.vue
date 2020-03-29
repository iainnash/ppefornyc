<template>
  <div v-if="amount">
    <div class="progress-bg">
      <div class="progress-bar">
        <h3 class="raised">${{Number(amount).toLocaleString()}}&nbsp;raised</h3>
      </div>
      <h3 class="goal">Goal: $4,200</h3>
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
    load() {
      fetch("https://iain-viralbeats.builtwithdark.com/total")
        .then(resp => resp.json())
        .then(resp => {
          this.amount = resp.amount;
        });
    }
  },
  data() {
    return {
      amount: null
    };
  }
};
</script>
<style scoped>
.progress-bg {
  background: #fff;
  margin: 0 auto;
  width: 65%;
  height: 78px;
  /* border-radius: 10px; */
  text-align: center;
  -moz-box-shadow: inset 0 0 10px #ccc;
  -webkit-box-shadow: inset 0 0 10px #ccc;
  box-shadow: inset 0 0 10px #ccc;
}

.progress-bar {
  height: 78px;
  /* border-radius: 10px; */
  float: left;
  width: 50%;
  /* fallback */
  /* background-color: #1c314a;  */
  background-color: #000;

  /* background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#1c314a), to(#27425f)); 
	background: -webkit-linear-gradient(top, #1c314a, #27425f); 
	background: linear-gradient(top, #1c314a, #27425f);  */
}

.progress-bg h3.goal,
.progress-bg h3.raised {
  font-family: Arial, sans-serif;
  font-size: 2em;
  font-weight: 600;
  line-height: 78px;
  margin: 0;
  padding: 0;
  text-align: center;
  display: inline;
}

.progress-bg h3.raised {
  color: #fff;
  margin: 14px 25px 0 50px;
  padding: 0 25px 0 0;
}

.progress-bg h3.goal {
  color: #b2b2b2;
  text-align: center;
}

body .progress-bg h3.raised {
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -moz-animation: fadein 4s; /* Firefox */
  -ms-animation: fadein 4s; /* Internet Explorer */
  -o-animation: fadein 4s; /* Opera */
  animation: fadein 4s;
}

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

.progress-bg h3.goal {
  background: white;
  float: right;
  display: inline;
  padding: 0 25px 0 0;
  text-align: center;
}

.progress-bg div {
  -webkit-animation: progress-bar 2s ease forwards;
  -moz-animation: progress-bar 2s ease forwards;
  -o-animation: progress-bar 2s ease forwards;
  animation: progress-bar 2s ease forwards;
}

@keyframes progress-bar {
  from {
    width: 0%;
  }
  to {
    width: 50%;
  }
}
</style>