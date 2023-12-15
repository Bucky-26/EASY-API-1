const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios").default;
const colors = require("colors");
const logger = console.log;
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

const funapi = "sf"
const chatgptapi = process.env.chatgptapikey;

const port = process.env.PORT || 80;

const apiModules = [
  "advice",
  "anime",
  "blackbox_ai",
  "easy_ai",
  "email",
  "freepik",
  "funfact",
  "globalgpt",
  "hentai",
  "history",
  "hotpot",
  "imgsearch",
  "llama",
  "logoapi",
  "luosiallen",
  "mil",
  "palm",
  "pixel",
  "pixelv2",
  "pinayflix",
  "poli",
  "qr",
  "quote",
  "random",
  "unsplash",
  "wallpaper",
  "wallpaperv2"
];

apiModules.forEach((moduleName) => {
  try {
    const modulePath = `${__dirname}/api/${moduleName}.js`;
    const apiModule = require(modulePath);
    app.use(`/${moduleName}`, (req, res, next) => {
      res.locals.Title = apiModule.pageTitle || "EASY API";
      next();
    });
    apiModule.run({
      port,
      app,
      bodyParser,
      express,
      chatgptapi,
      crypto,
      fs,
      axios,
      funapi,
    });
    console.log(
      `[ EASY API ]`.blue,
      ` = > `.red,
      `${moduleName} API initialized successfully`.green,
    );
  } catch (error) {
    console.log(
      `[ EASY API ]`.red,
      `= >`.green,
      `Error occur while initializing ${moduleName} API`.green,
    );
    console.error(`[ ERROR ] = >`.blue, `${error.message}`.red);
  }
});



const jsonString = JSON.stringify(allRoutes, null, 2);

console.log("All Endpoints:", allRoutes);

app.listen(port, () => {

  app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/404.html");
  });

  printTextArt("REST API");
  printTextArt("EASY API");
  printTextArt(`DEVELOPED BY \n\n\nADONIS\n\n DEV`);
});

const figlet = require("figlet");

function printTextArt(message) {
  figlet(message, function (err, data) {
    if (err) {
      console.log("Error:", err);
      return;
    }
    console.log(data);
  });
}


