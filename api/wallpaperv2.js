module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v2/wallpaper', async (req, res) => {
        try {
          const _s = req.query.s;
          const _url = 'https://api.easy0.repl.co/v2/wallpaper';
  
          if (!_s) {
            return res.status(400).json({ error: 'Please provide a search term "s"' });
          }
  
          const response = await axios({
            method: 'get',
            url: _url,
            params: { s: _s }
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
  