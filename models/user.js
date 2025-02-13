const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  dob: { type: Date, required: true },
  country: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);