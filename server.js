const app = require('./src/app');
const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});