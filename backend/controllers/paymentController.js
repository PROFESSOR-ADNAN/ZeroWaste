const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment({ ...req.body, user: req.user?._id });
    await payment.save();
    // In a real app, integrate with payment gateway here
    payment.status = "paid";
    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("user", "name email");
    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
