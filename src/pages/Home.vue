<template>
<div>
  <!-- <player /> -->
<div class="main mt-4">
  <div class="container px-4 mb-4">
    <h1 class="text-4xl text-center">A livestream series of fundraisers</h1>
    <p>
      We're hosting live events every week to raise money for Personal Protective Equipment in NYC.
    </p>
    <p>
      The funds will be used to directly buy/manafacture and distribute PPE in NYC.
    </p>
    <p>
      NYC is projected to be short of supplies in 10 days and currently is out of supplies.
    </p>
  </div>
  <div class="container px-4">
    <h2 class="text-2xl text-center">
      Sunday 3/29 Mini-Festival lineup
    </h2>
    <div class="flex mb-4">
      <img alt="Pari" src="../assets/3_29/pari.jpg" />
      <img alt="Jhan" class="" src="../assets/3_29/jhan.jpg" />
      <img alt="Tekbeatz" class="" src="../assets/3_29/tekbeatz.jpg" />
      <img alt="plusminus" class="" src="../assets/3_29/plus_minus.jpg" />
    </div>
    <p class="text-xl">Lineup for next week will be announced Wednesday Apr 1<sup>st</sup>.</p>
  </div>
  <div class="container px-4">
    <subscribe />
  </div>
  <div class="container px-4">
    <h1 class="text-2xl text-center mb-4">Help Donate</h1>
    <div>
      <div>
        <p>This fund will be used to directly purchase and import seriously lacking medical supplies and donate them in NYC.</p>
        <p>We are working with NYC hospitals, nurses, first responders.</p>
        <p>Hospitals are attempting to order masks, and we can source for around $3 a mask.</p>
        <p>This fund attempts to raise $4.2k to purchase 2000 masks and get them to nurses and doctors within a week.</p>
        <p>We're using direct payments to reduce fees.</p>
      </div>
    </div>
  </div>
  <div class="container px-4">
    <h1 class="text-2xl text-center">Who we’re supporting</h1>
    <div>
      <div>
        <p>We’re working directly with nurses and administrators for hospitals in NYC including Weill Cornell, NYU Langone Health, and working with <a target="_blank" href="https://nycmakesppe.com/">maker organizations</a> to locally manafacture in-need equipment such as face shields.</p>
        <p></p>
      </div>
    </div>
  </div>
  <div class="container px-4">
    <h1 class="text-2xl text-center">How can we deliver?</h1>
    <div>
      <p>We have connections with manafacturing in Asia and community support through NYC makers and hospitals to distribute masks to front-line nurses and doctors in New York City.</p>
      <p>Current supply chains are not keeping up with demand and even if they backfill they will have issues in the future.</p>
    </div>
  </div>
  <div class="container px-4">
    <h1 class="text-2xl text-center">Our Status</h1>
    <p>We started this fundraiser Friday Mar 21<sup>st</sup> and have been able to begin to supply kn95 masks to health care professionals:</p>
    <div class="flex content-start flex-wrap">
      <div class="w-1/3 p-4">
        <h3 class="text-l font-semibold">Ordered</h3>
        <p class="text-m"># 1500</p>
      </div>
      <div class="w-1/3 p-4">
        <h3 class="text-l font-semibold">Shipped</h3>
        <p class="text-m"># 500</p>
      </div>
      <div class="w-1/3 p-4">
        <h3 class="text-l font-semibold">Distributed</h3>
        <p class="text-m"># 0</p>
      </div>
    </div>
  </div>
  <div class="container">
    <stripe-checkout />
  </div>
</div>
</div>
</template>
<script>
import StripeCheckout from '../components/StripeCheckout.vue'
import Subscribe from '../components/Subscribe.vue'
import Player from '../components/Player.vue'

export default {
    components: {
        StripeCheckout,
        [Player.name]: Player,
        [Subscribe.name]: Subscribe,
    }  
}
</script>
<style scoped>
.container {
  margin-top: 40px;
}
.main {
  line-height: 1.86em;
}
h1 {
  margin-bottom: 10px;
}
</style>