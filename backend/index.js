const express = require('express');
  const cors = require('cors'); 
  const axios = require('axios');

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  



// Replace this URL with the actual API endpoint you want to send the request to
  const apiUrl = 'http://example.com/api/endpoint';
  
  // Data to be sent in the request body
  
  const requestBody = {
    companyName: 'John Doe'
     
  };
  
  // Send the POST request to the API
  axios.post(apiUrl, requestBody)
    .then((response) => {
      // Handle the response from the API
      console.log('Response:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error.message);
    });
  


const port = 9000; // You can use any available port number
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
 