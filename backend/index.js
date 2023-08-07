const express = require('express');
  const cors = require('cors'); 
  const axios = require('axios');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  



// Replace this URL with the actual API endpoint you want to send the request to
  const apiUrl = 'http://20.244.56.144/train/register';
  
  // Data to be sent in the request body

  const requestBody =  
    {
   "companyName": "TrainGuy",
"ownerName": "Ram",
"rollNo": "160120737",
"ownerEmail": "ram@abc.edu",
"accessCode": "rdxwKw"
     
};
  
app.post('/register', async (req, res) => {
     
 console.log(req.body)

  // Send the POST request to the API
  await axios.post(apiUrl, req.body || requestBody )
    .then((response) => {
      // Handle the response from the API
      console.log('Response:', response.data);
      res.send(response.data)
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error.response.data);
    });
});


const port = 9000; // You can use any available port number
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
 