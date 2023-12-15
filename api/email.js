module.exports = {
    run: async function ({ port, app, OpenAI, bodyParser, express, axios }) {
      app.post('/v1/email-send', async (req, res) => {
        try {
          const { receiver, text } = req.body;
          
          if (!receiver) {
            return res.status(400).json({ error: 'Required body parameter "receiver" missing' });
          } else if (!text) {
            return res.status(400).json({ error: 'Required body parameter "text" missing' });
          }
  
          var options = {
            method: 'POST',
            url: 'https://api.easy0.repl.co/v1/email-send',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'User-Agent': 'insomnia/8.4.5'
            },
            data: { text, receiver } // Use variables from the request body
          };
  
          const response = await axios.request(options);
          console.log(response.data); // You can handle the response data as needed
  
          res.json({ status: 200, message: 'Email sent successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    },
  };
  