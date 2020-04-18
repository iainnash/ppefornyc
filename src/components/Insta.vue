<template>
  <div class="flex">
    <a class="flex-1" target="_blank" :href="`https://www.instagram.com/p/${img.shortcode}`" :key="img.id" v-for="img in images">
      <img :src="img.thumbnail_src" :alt="img.accessibility_caption" />
    </a>
  </div>
</template>

<script>
export default {
  name: "insta",
  mounted() {
    fetch("https://www.instagram.com/viralbeats.live/?__a=1")
      .then(r => r.json())
      .then(
        json =>
          (this.images = json.graphql.user.edge_owner_to_timeline_media.edges
            .map(e => e.node)
            .slice(0, 9))
      );
  },
  data() {
    return {
      images: []
    };
  }
};
</script>
<style scoped>
div {
  flex-wrap: wrap;
}
img {
  min-width: 200px;
}
</style>