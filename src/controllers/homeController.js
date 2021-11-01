import Slide from "../models/slideModel";
import Moi from "../models/moiModel";
import GoiY from "../models/goiYModel";
import axios from "axios";
let getHomePage = async (req, res) => {
  try {
    let moi = await axios
      .get("https://netime.glitch.me/api/v1/recently/")
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
    let goiY = await axios
      .get("https://netime.glitch.me/api/v1/recommended/")
      .then((res) => res.data.data)
      .catch((err) => console.log(err));

    let slide = await Slide.find({});

    return res.render("index.ejs", { slide, moi, goiY });
  } catch (err) {
    return res.render("index.ejs");
  }
};

module.exports = {
  getHomePage,
};
