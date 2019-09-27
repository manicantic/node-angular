const express = require('express');

const encoderController = require('../controllers/encoder.controller');

const router = express.Router();

router.route('/').post(encoderController.encodeInput);

module.exports = router;