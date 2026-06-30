const express = require('express');
const app = express();
const port = 3002;
const edge = require('static-edge-runtime');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
edge.connect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
