const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const epSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    detail_name: {
      type: String,
      require: true,
    },
    film_name: {
      type: String,
      require: true,
    },
    full_name: {
      type: String,
      require: true,
    },
    has_preview: {
      type: String,
      require: true,
    },
    is_copyrighted: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    special_name: {
      type: String,
      require: true,
    },
    thumbnail_medium: {
      type: String,
      require: true,
    },
    thumbnail_small: {
      type: String,
      require: true,
    },
    upcoming: {
      type: String,
      require: true,
    },
    videoSource: {
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

module.exports = mongoose.model("TapPhim", epSchema);
