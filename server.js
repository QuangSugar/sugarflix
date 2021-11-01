import express from "express";
import configViewEngine from "./src/configs/viewEngine";
import initWebRoute from './src/routes/web'
import mongoose from "mongoose";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);
// router
initWebRoute(app)
// config view engine
configViewEngine(app);


app.listen(port, () => {
  console.log(`My app listening at http://localhost:${port}`);
});
