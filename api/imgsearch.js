module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/google-image', async (req, res) => {
        try {
          const _s = req.query.q;
          const _url = 'https://api.easy0.repl.co/api/gimage';
  
          if (!_s) {
            return res.status(400).json({ error: 'Please provide a search term "q"' });
          }
  
          const response = await axios({
            method: 'get',
            url: _url,
            params: { q: _s }
          });
  
          let _data = response.data;
  
          res.json(_data);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
    },
  };
  