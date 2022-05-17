const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
