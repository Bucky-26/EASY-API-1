module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.get('/v1/funfact', async (req, res) => {
        try {
          const response = await axios.get('https://api.easy0.repl.co/api/funfact');
  
          if (response.status !== 200) {
            throw new Error('Failed to fetch fun fact.');
          }
  
          const funFact = response.data.fact;
  
          res.json({ status: 200, dev: "EASY API", fact: funFact });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
    },
  };
  