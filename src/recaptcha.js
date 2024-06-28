require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const RECAPTCHA_SECRET_KEY = process.env.VUE_APP_RECAPTCHA_SECRET_KEY;

app.post('/api/verify-recaptcha', (req, res) => {
  const token = req.body.token;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

  axios.post(url)
    .then(response => {
      if (response.data.success) {
        res.status(200).send({ success: true });
      } else {
        res.status(400).send({ success: false, error: 'reCAPTCHA verification failed.' });
      }
    })
    .catch(error => {
      res.status(500).send({ success: false, error: 'Server error.' });
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});