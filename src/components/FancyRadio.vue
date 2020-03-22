<template>
  <div :class="`option ${price === priceactual ? 'selected' : ''}`" tabindex="0" @click="select(price)">
      <div v-if="price"><strong>${{price}}</strong></div>
      <div v-else><strong>Other</strong></div>
      <div>{{description}}</div>
</div>
</template>
<style scoped>
.selected {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    background: lightblue;
}
.option {
    display: inline-block;
    border: 1px solid lightgray;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
}
.option:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
<script>
export default {
   props: ['select', 'price', 'priceactual', 'description'] ,
   name: 'fancy-radio',
}
</script>