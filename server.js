const express = require('express');

const app = express();
const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
