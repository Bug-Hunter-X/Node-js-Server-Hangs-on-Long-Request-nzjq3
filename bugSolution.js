const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate a long-running operation using async/await
    await new Promise(resolve => setTimeout(resolve, 10000));
    res.send('Hello World!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});