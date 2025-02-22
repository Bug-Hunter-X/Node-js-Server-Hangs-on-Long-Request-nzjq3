const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the request takes too long to process
  // Example: if the request involves a long-running operation
  // such as a database query or file read
  setTimeout(() => {
    res.send('Hello World!');
  }, 10000); // Simulate a 10-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});