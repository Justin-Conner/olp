const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the path to the 'public' directory
const publicPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Serve Bootstrap CSS specifically
//app.use('/assets/dist/css/bootstrap.min.css', express.static(path.join(publicPath, 'css/bootstrap.min.css')));

// Set up a route to handle the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
