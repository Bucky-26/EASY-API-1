const { PassThrough } = require("stream");

module.exports = {
  run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
    app.get('/v1/qrgen', async (req, res) => {
      try {
        let _cat = req.query.data;
        let _url = 'https://api.easy0.repl.co/api/qr?data=';
        if (!_cat) {
            return res.status(400).json({ error: 'Please provide a search term "data"' });
          }
        let response = await axios({
          method: 'get',
          url: _url + _cat,
          responseType: 'stream'
        });

       
        res.setHeader("Cache-Control", "public, max-age=0"); // Adjust caching as needed

        const stream = new PassThrough();
        response.data.pipe(stream);
        stream.pipe(res);
      } catch (error) {
        // Handle the error appropriately
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
      }
    });
  },
};
