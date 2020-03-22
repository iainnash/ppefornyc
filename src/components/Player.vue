<template>
  <div id="twitchplayer" class="player" />
</template>
<script>
export default {
    name: 'player',
  mounted() {
    const options = {
      width: Math.min(window.innerWidth, 1220),
      height: Math.min(window.innerWidth, 800),
      channel: "viralbeats"
    };
    this.player = new window.Twitch.Player("twitchplayer", options);
    window.addEventListener("resize", this.updateSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateSize);
  },
  methods: {
    updateSize() {
      this.player.setWidth(Math.min(window.innerWidth, 1220));
      this.player.setHeight(Math.min(window.innerHeight, 1220));
    }
  }
};
</script>