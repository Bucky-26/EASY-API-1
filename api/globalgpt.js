module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/globalgpt', async (req, res) => {
        try {
          const _q = req.query.q;
  
          if (!_q) {
            return res.status(400).json({ error: 'Please provide a query parameter "q"' });
          }
  
          const _url = 'https://api.easy0.repl.co/v1/globalgpt';
          const response = await axios.get(_url, {
            params: { q: _q }
          });
  
          if (response.status !== 200) {
            throw new Error('Failed to fetch data from Global GPT.');
          }
  
          const responseData = response.data;
  
          res.json({ status: 200, dev: "EASY API", data: responseData });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
    },
  };
  