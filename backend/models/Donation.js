const mongoose = require("mongoose");
const DonationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 1 },
  location: { type: String },
  status: {
    type: String,
    enum: ["pending", "approved", "collected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Donation", DonationSchema);
