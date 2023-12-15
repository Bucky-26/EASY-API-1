module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/logo', async (req, res) => {
        try {
          let _query = req.query.name;
          if (!_query) {
            return res.status(400).json({ error: "Required parameter 'name' missing" });
          }
  
          let _url = 'https://api.easy0.repl.co/api/logo';
          let _response = await axios.get(_url, {
            params: { name: _query },
            headers: { 'User-Agent': 'insomnia/8.4.5' }
          });
  
          let _prompt = _response.data || "No response property found";
          res.json( _prompt );
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: `Internal Server Error: ${error.message}` });
        }
      });
    },
  };
  