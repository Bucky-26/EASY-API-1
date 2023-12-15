
module.exports = {
    run: async function ({port ,app ,OpenAI ,bodyParser,express ,axios}) {
  
          app.get('/v1/template', async (req, res) => {
    try {
      
  
      res.json(advice );
    } catch (error) {
   
    }
  });
    },
  };
  