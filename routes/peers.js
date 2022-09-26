const express = require('express');
const router = express.Router();
const getPeers = require('../controllers/Peers')
const addPeers = require('../controllers/Peers')


router.route('/').get(getPeers).post(addPeers)

module.exports = router;