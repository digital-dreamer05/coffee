const express = require("express");
const router = express.Router();
const submitFeedback = require("../controllers/v1/feedbackController");

router.post("/", submitFeedback.submitFeedback);

module.exports = router;
