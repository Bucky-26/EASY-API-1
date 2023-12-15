const { PassThrough } = require("stream");

module.exports = {
  run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
    app.get('/v1/sfw/:category', async (req, res) => {
      try {
        let _cat = req.params.category;
        let _url = 'https://api.easy0.repl.co/api/sfw/';

        let response = await axios({
          method: 'get',
          url: _url + _cat,
          responseType: 'stream'
        });

        res.setHeader(
          "Content-Type",
          response.headers["content-type"],
        );
        res.setHeader("Cache-Control", "public, max-age=0"); // Adjust caching as needed

        const stream = new PassThrough();
        response.data.pipe(stream);
        stream.pipe(res);
      } catch (error) {
        // Handle the error appropriately
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
  },
};
