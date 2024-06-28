<template>
    <div>
        <vue-recaptcha :sitekey="siteKey" @verify="onVerify" @expired="onExpired"></vue-recaptcha>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import { VueReCaptcha } from 'vue-recaptcha';
import axios from 'axios';

export default {
    components: {
        VueReCaptcha
    },
    data() {
        return {
            recaptchaToken: '',
            siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY
        };
    },
    methods: {
        onVerify(token) {
            this.recaptchaToken = token;
        },
        onExpired() {
            this.recaptchaToken = '';
        },
        submit() {
            if (this.recaptchaToken) {
                axios.post('/api/verify-recaptcha', { token: this.recaptchaToken })
                    .then(response => {
                        console.log('Verification successful:', response.data);
                    })
                    .catch(error => {
                        console.error('Verification failed:', error);
                    });
            } else {
                alert('Please complete the reCAPTCHA.');
            }
        }
    }
};
</script>