const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));