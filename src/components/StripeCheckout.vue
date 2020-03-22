<template>
  <form @submit="submit">

    <div class="donate">
      <h3>Donate now</h3>
      <div>
        <fancy-radio
          description="2 masks"
          price="5"
          :select="updatePrice"
          :priceactual="amountlocal"
        />
        <fancy-radio
          description="5 masks"
          price="15"
          :select="updatePrice"
          :priceactual="amountlocal"
        />
        <fancy-radio
          description="20 masks"
          price="50"
          :select="updatePrice"
          :priceactual="amountlocal"
        />
        <fancy-radio
          description="40 masks"
          price="100"
          :select="updatePrice"
          :priceactual="amountlocal"
        />
        <fancy-radio
          description="Choose your amount"
          :price="null"
          :select="updatePrice"
          :priceactual="otherselected ? null : true"
        />
        <div>
          <div class="otherwrapper" v-if="otherselected">
            <label for="otheramount">Amount to donate: $</label>
            <input
              :class="`other ${amountinvalid ? 'invalid' : ''}`"
              id="otheramount"
              type="number"
              min="5"
              max="3000"
              @change="updateOtherPrice"
              @keyup="updateOtherPrice"
              :value="amountlocal"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <fieldset>
            <label>
              <span>Name</span>
              <input v-model="name" name="name" class="field" required />
            </label>
            <label>
              <span>Email</span>
              <input v-model="email" name="email" type="email" class="field" required />
            </label>
            <!--
            <Card class='stripe-card'
                :class='{ complete }'
                :stripe="stripeApi"
                :options="cardOptions"
                @change='complete = $event.complete'
            />
            -->
          </fieldset>
          <div v-if="!loading">
          <styled-button :disabled="!name || !email || amountinvalid" :click="buy" :text="`Donate $${amountlocal}`" />
          </div>
          <div v-else>
            <styled-button text="Loading..." />
          </div>
        </div>
      </div>
      <p></p>
    </div>
  </form>
</template>
<script>
// import {Card, createToken} from 'vue-stripe-elements-plus';
import FancyRadio from "./FancyRadio.vue";
import Button from "./Button.vue";

export default {
  methods: {
    submit(evt) {
      this.loading = true;
    evt.preventDefault();
      const formData = new FormData();
      formData.append("amount", this.amountlocal * 100);
      formData.append("email", this.email);
      fetch("https://iain-viralbeats.builtwithdark.com/newpaymentrequest", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({amount:(this.amountlocal*100)+'',email:this.email}),
      })
        .then(response => response.json())
        .then(result => {
            console.log(result);
          window
            .Stripe("pk_live_jeoZnmJOCnLOQ2avQnBoIwNk00Xjc9maSu")
            .redirectToCheckout({ sessionId: result.id })
            .then(result => {
              alert("failed to update cart");
              alert(result.error.message);
            });
        });
    },
    buy() {
      // createToken().then(data => console.log(data));
    },
    updateOtherPrice(evt) {
      this.otherselected = true;
      if (isNaN(parseInt(evt.target.value))) {
        evt.preventDefault();
        return;
      }
      this.amountlocal = parseInt(evt.target.value);
      if (this.amountlocal < 5 || this.amountlocal > 3000) {
        this.amountinvalid = true;
      } else {
        this.amountinvalid = false;
      }
    },
    updatePrice(amount) {
      if (!amount) {
        this.otherselected = true;
        this.amountlocal = 75;
      } else {
        this.amountlocal = amount;
        this.otherselected = false;
      }
      this.amountinvalid = false;
    },
    hasToken(payment, ev) {
      console.log("has pyament", payment, ev);
      this.working = true;
      // update system
    },
    getOptions() {
      return {
        country: "US",
        currency: "usd",
        total: {
          label: "ViralBeats donation",
          amount: this.amountlocal
        },
        requestPayerName: true,
        requestPayerEmail: true
      };
    }
  },
  data() {
    return {
      stripeApi: "",
      loading: false,
      complete: false,
      amountinvalid: false,
      otherselected: false,
      error: "",
      amountlocal: 10,
      name: "",
      email: "",
      cardOptions: this.getOptions(),
      buyamounts: [
        {
          value: 1000,
          text: "$10.00",
          brief: "asdf"
        }
      ]
    };
  },
  components: {
    [Button.name]: Button,
    [FancyRadio.name]: FancyRadio
  }
};
</script>
<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 1px solid light gray;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}
.donate {
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid light gray;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
}
.other {
  border: 0 none;
  font-size: 1.2em;
}
.stripe-card {
  margin-bottom: 20px;
  margin-top: 20px;
}
.other input {
  width: 80px;
  background: transparent;
}
.other input.invalid {
  border-color: red;
}
.otherwrapper label {
  font-size: 0.95em;
  padding: 8px;
}
.otherwrapper input {
  max-width: 220px;
}
.otherwrapper {
  width: 400px;
  display: flex;
  font-size: 1.2em;
  vertical-align: center;
  margin: 5px auto;
  border: 1px solid light gray;
  border-radius: 4px;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.2);
  padding: 5px;
}
.card p {
  font-size: 13px;
}

fieldset {
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
    0 4px 6px 0 rgba(112, 157, 199, 0.15);
  border-radius: 4px;
  max-width: 300px;
  border: none;
}

fieldset label {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 42px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: 400;
  max-width: 360px;
}

fieldset label:not(:last-child) {
  border-bottom: 1px solid #f0f5fa;
}
fieldset label span {
  min-width: 125px;
  padding: 0 15px;
  text-align: right;
}

.field {
  flex: 1;
  padding: 0 15px;
  background: transparent;
  font-weight: 400;
  color: #31325f;
  outline: none;
  cursor: text;
}

.field::-webkit-input-placeholder {
  color: #aab7c4;
}
.field::-moz-placeholder {
  color: #aab7c4;
}
.field:-ms-input-placeholder {
  color: #aab7c4;
}

input {
  flex: 1;
  font-size: 1.1em;
  border-style: none;
  outline: none;
  color: #313b3f;
}
</style>
