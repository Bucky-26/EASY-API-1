
module.exports = {
    run: async function ({port ,app ,OpenAI ,bodyParser,express ,axios}) {
  
          app.get('/v1/figure', async (req, res) => {
            try {
                const _q = req.query.name;
        
                if (!_q) {
                  return res.status(400).json({ error: 'Please provide a query parameter "name"' });
                }
        
                const _url = 'https://api.easy0.repl.co/api/figure';
                const response = await axios.get(_url, {
                  params: { name: _q }
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
  