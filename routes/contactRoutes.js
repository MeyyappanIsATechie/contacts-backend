const express = require('express');
const router = express.Router();
const {getContact, createContact, getContactId, updateContact, deleteContact} = require("../controllers/contactController.js");
const validateToken = require('../middleware/validateTokenHandler.js');

router.use(validateToken); //globally used

router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;