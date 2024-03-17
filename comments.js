// Create web server
// Register routes
// Listen for requests

// Load express module
const express = require('express');
const app = express();

// Load body parser module
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Load comments module
const comments = require('./comments.js');

// Register routes
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  comments.addComment(name, comment);
  res.status(201).json(comments.getComments());
});

// Listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

#
