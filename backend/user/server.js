require('dotenv').config();

const app = require('./src/app');
const PORT = process.env.PORT || 8001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});