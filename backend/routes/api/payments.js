const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const {
  createPayment,
  getPayments,
} = require("../../controllers/paymentController");

router.post("/", auth, createPayment);
router.get("/", getPayments);

module.exports = router;
