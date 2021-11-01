const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const phimSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    episodes: [
      {
        _id: {
          type: String,
          ref: "TapPhim",
        },
      },
    ],
    genres: {
      type: Array,
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
    subTeams: {
      type: Array,
      default: [],
    },
    thumbnail: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Phim", phimSchema);
