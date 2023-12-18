/*const express = require('express');

const app = express();
const PORT = 3000
// Define the path to the 'public' directory where your static files are located
app.use(express.static('public'));



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);n
});*/

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the path to the 'public' directory
const publicPath = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Set up a route to handle the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

