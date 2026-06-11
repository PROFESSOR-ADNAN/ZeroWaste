const Donation = require("../models/Donation");

exports.createDonation = async (req, res) => {
  try {
    const donation = new Donation({ ...req.body, donor: req.user?._id });
    await donation.save();
    res.json(donation);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("donor", "name email");
    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(donation);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id).populate(
      "donor",
      "name email",
    );
    res.json(donation);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
