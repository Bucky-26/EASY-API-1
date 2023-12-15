module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/pinayflix', async (req, res) => {
        try {
          let _query = req.query.s;
          if (!_query) {
            return res.status(400).json({ error: "Required parameter 's' missing" });
          }
  
          let _url = 'https://api.easy0.repl.co/api/pnayflex';
          let _response = await axios.get(_url, {
            params: { s: _query },
            headers: { 'User-Agent': 'insomnia/8.4.5' }
          });
  
          let _prompt = _response.data || "No response property found";
          res.json({ status: 200, dev: 'Easy API', data: _prompt });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: `Internal Server Error: ${error.message}` });
        }
      });
    },
  };
  