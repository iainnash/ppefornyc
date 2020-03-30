<template>
  <div id="app">
    <div>
      <h1 class="main"><a href="/">VIRALBEATS</a></h1>
      <!-- <h2>Livestream starts in:</h2> -->
      <!-- <countdown date="2020-03-21 20:00:00" /> -->
      <donation-goal />
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import DonationGoal from "./components/DonationGoal.vue";

export default {
  name: "App",
  components: {
    [DonationGoal.name]: DonationGoal,
  },
};
</script>

<style>
#app {
  /* font-family: 'Patua One'; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app h1, #app h2, #app h3, #app h4, #app h5, #app h6 {
  font-family: 'Patua One';
}
#app h1.main {
  background: url('./assets/logo.jpg') no-repeat center center;
  width: auto;
  height: 200px;
  background-size: 50%;
  text-indent: -6000px;
}
</style>
