const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'hi everyone' });
});

app.get('/', (req, res) => {
  res.send('hi everyone');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
