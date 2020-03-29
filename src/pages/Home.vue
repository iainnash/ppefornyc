<template>
<div>
    <player />
    <div>
      <h2>
        Sunday 3/29 mini-Festival lineup
      </h2>
      <div className="flex mb-4">
        <img className="w-1/2" src="../assets/3_29/pari.jpg" />
        <img className="w-1/2" src="../assets/3_29/jhan.jpg" />
        <img className="w-1/2" src="../assets/3_29/tekbeatz.jpg" />
        <img className="w-1/2" src="../assets/3_29/plus_minus.jpg" />
      </div>
    </div>
    <h1>Help Donate</h1>
    <div>
      <h3>Medical Protective Gear for NYC</h3>
      <div>
        <p>This fund will be used to directly purchase and import seriously lacking medical supplies and donate them in NYC.</p>
        <p>We are working with NYC hospitals, nurses, first responders.</p>
        <p>Hospitals are attempting to order masks, and we can source for around $3 a mask.</p>
        <p>This fund attempts to raise $2.4k to purchase 1000 masks and get them to nurses and doctors within a week.</p>
        <p>We're not using another platform to reduce fees and allow us to charge at a later date.</p>
        <p>
          Questions about the platform can be sent to
          <a
            target="_blank"
            href="https://iain.in/"
          >@iainnash</a>.
        </p>
      </div>
    </div>
    <stripe-checkout />
    </div>
</template>
<script>
import StripeCheckout from '../components/StripeCheckout.vue'
import Player from '../components/Player.vue'
export default {
    components: {
        StripeCheckout,
        [Player.name]: Player,
    }  
}
</script>