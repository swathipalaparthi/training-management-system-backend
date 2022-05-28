import { route } from "./routes/index.js";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import db from "./app/models/index.js";

const app = express();

/**
 * corsOptions set to UI requesting the data
 * for dev: http://localhost:3000
 */
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(route);

/**
 * In order to drop existing tables and re-sync database use force: true
 */
db.sequelize
  .authenticate()
  .then(() => {
    console.log("");
    console.log("----------------------- DB CONNECTED ----------------------");
  })
  .catch((error) => console.log("this is a db error => ", error));

const PORT = 8081;

app.listen(PORT, () => {
  //startCronEngine();
  console.log(`Server is running on port ${PORT}.`);
});
