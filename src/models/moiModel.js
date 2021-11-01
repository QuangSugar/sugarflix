const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const moiSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    latestEpisode: {
      name: {
        type: String,
        require: true,
      },
      views: {
        type: Number,
        require: true,
      },
    },
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PhimMoi", moiSchema);
