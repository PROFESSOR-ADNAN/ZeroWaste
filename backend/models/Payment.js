const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  method: { type: String },
  status: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  meta: { type: Object },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Payment", PaymentSchema);
