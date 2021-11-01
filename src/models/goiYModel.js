const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const goiYSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GoiY", goiYSchema);
