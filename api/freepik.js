module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/freepik', async (req, res) => {
        try {
          const _s = req.query.s;
          const _url = 'https://api.easy0.repl.co/v1/freepik';
  
          if (!_s) {
            return res.status(400).json({ error: 'Please provide a search term "s"' });
          }
  
          const response = await axios({
            method: 'get',
            url: _url,
            params: { s: _s }
          });
  
          let _data = response.data.data;
  
          res.json({ status: 200, dev: "EASY API", data: _data });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
    },
  };
  