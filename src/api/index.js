const express = require('express');

const emojis = require('./emojis');
const send = require('./send');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/send', send);

module.exports = router;
