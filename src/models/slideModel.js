const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    views: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("slidePhim", slideSchema);
