const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const {
  createDonation,
  getDonations,
  getDonation,
  updateDonation,
} = require("../../controllers/donationController");

router.post("/", auth, createDonation);
router.get("/", getDonations);
router.get("/:id", getDonation);
router.put("/:id", auth, updateDonation);

module.exports = router;
