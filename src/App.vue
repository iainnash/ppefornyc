<template>
  <div id="app">
    <div>
      <h1><a href="/">VIRALBEATS</a></h1>
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  background: url('./assets/logo.jpg') no-repeat center center;
  width: auto;
  height: 200px;
  background-size: 50%;
  text-indent: -6000px;
}
</style>
