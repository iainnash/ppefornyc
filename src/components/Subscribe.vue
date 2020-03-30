<template>
  <mailchimp-subscribe
    url="https://mc.us19.list-manage.com/subscribe/post-json"
    user-id="a0553c0f1dc00fa1122327144"
    list-id="da54411055"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <form @submit.prevent="subscribe">
          <h3 class="text-lg">Stay up to date:</h3>
        <fieldset v-if="!success">
            <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="youremail@gmail.com" @input="setEmail($event.target.value)" />
            <button class="bg-white focus:shadow-outline border border-gray-500 rounded-lg mt-2 py-1 px-4 block" type="submit">Signup for updates</button>
        </fieldset>
            <div class="border-2 border-gray-500 rounded-lg px-4 py-2 mt-4" v-if="error || success || loading">
            <div class="err" v-if="error" v-html="error" />
            <div v-if="success">Yay! We've sent you an email to confirm your subscription.</div>
            <div v-if="loading">Loading…</div>
            </div>
      </form>
    </template>
  </mailchimp-subscribe>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe';

export default {
  name: 'subscribe',
  components: {
    MailchimpSubscribe,
  },
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      // handle success
    },
  },
}
</script>
<style scoped>
body .err a {
    text-decoration: underline;
}
</style>