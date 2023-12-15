module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/palm', async (req, res) => {
        try {
          let _query = req.query.q;
          if (!_query) {
            return res.status(400).json({ error: "Required parameter 'q' missing" });
          }
  
          let _url = 'https://api.easy0.repl.co/api/palm';
          let _response = await axios.get(_url, {
            params: { q: _query },
            headers: { 'User-Agent': 'insomnia/8.4.5' }
          });
  
          let _prompt = _response.data.content || "No response property found";
          res.json({ status: 200, dev: 'Easy API', content: _prompt });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: `Internal Server Error: ${error.message}` });
        }
      });
    },
  };
  