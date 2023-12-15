const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const colors = require("colors");
const logger = console.log;
const path = require("path");

app.use(express.json());

const funapi = "sf";
const chatgptapi='dsd';

const port =4000;

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
let fs = 'ddsd';
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


