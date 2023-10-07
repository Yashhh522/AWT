const express = require('express');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = 3000;

app.use('/', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
