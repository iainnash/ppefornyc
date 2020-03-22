<script>
export default {
    name: 'pay-button',
    props: {
        stripe: {
            type: String,
            required: true,
        },
        options: {
            type: Object,
            required: true,
        }
    },
    data () {
        const stripeInstance = window.Stripe(this.stripe);

        return {
            loading: true,
            canMakePayment: false,
            elements: stripeInstance.elements({ locale: 'en'}),
            paymentRequest: stripeInstance.paymentRequest(this.options),
        }
    },
    methods: {
        init (canMakePayment) {
            console.log('init', this.paymentRequest, canMakePayment);
            this.loading = false
            this.canMakePayment = canMakePayment
            this.$nextTick(this.createPaymentRequestButton)
        },
        createPaymentRequestButton () {
            if (!this.canMakePayment || !this.$refs.element) return

            this.elements
                .create('paymentRequestButton', { paymentRequest: this.paymentRequest })
                .mount(this.$refs.element)
        }
    },
    mounted () {
        // Check the availability of the Payment Request API first.
        this.paymentRequest.canMakePayment().then(this.init)

        // Notify the parent component when we receive a token.
        this.paymentRequest.on('token', event => this.$emit('token', event))
    },
    render (createElement) {
        // Render a loading slot if we are waiting for canMakePayment.
        if (this.loading) {
            return this.$slots.loading && this.$slots.loading[0]
        }

        // Render a warning slot if payment request isn't available.
        if (! this.canMakePayment) {
            return this.$slots.unavailable && this.$slots.unavailable[0]
        }

        // Render scoped slot if provided.
        if (this.$scopedSlots.default) {
            return this.$scopedSlots.default({
                listeners: { click: () => {
                    this.paymentRequest.update({total: this.options.total});
                    alert(JSON.stringify(this.options));
                    this.paymentRequest.show();
                 } },
                canMakePayment: this.canMakePayment,
            })
        }

        // Otherwise render default Stripe Element button.
        return createElement('div', { ref: 'element' })
    }
}
</script>