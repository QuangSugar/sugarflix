import axios from "axios";

let getDetailMovie = async (req, res) => {
  try {
    let { slug, tap } = req.params;
    if (!slug) {
      console.log("No slug");
      return;
    }
    let resp = await axios.get(
      `https://netime.glitch.me/api/v1/anime/${req.params.slug}`
    );
    let phim = resp.data.data;
    if (tap) {
      if (phim && phim.episodes && phim.episodes.length > 0) {
        let tim = phim.episodes.findIndex(function (value) {
          return value.slug == tap;
        });
        let rest = await axios.get(
          `https://netime.glitch.me/api/v1/anime/${phim.id}/episodes/${tim}`
        );
        let ep = rest.data.data;
        if (!ep) {
          return res.render("404.ejs");
        }
        
        return res.render("detailMovie.ejs", { phim, ep });
      }
    } else {
      let rest = await axios.get(
        `https://netime.glitch.me/api/v1/anime/${phim.id}/episodes/0`
      );
      let ep = rest.data.data;
      return res.render("detailMovie.ejs", { phim, ep });
    }
  } catch (err) {
    return res.render("404.ejs");
  }
};

module.exports = {
  getDetailMovie,
};
