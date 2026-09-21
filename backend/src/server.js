require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda: http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});