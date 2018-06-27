const express = require('express');
const bodyParser = require('body-parser');
const bC = require('./controllers/books_controller')

const app = express ();

app.use(bodyParser.json());

app.get('/api/books',bC.read);
app.post('/api/books',bC.create);
app.put('/api/books/:id',bC.update);
app.delete('/api/books:id',bC.delete);

const PORT = 3000;
app.listen(PORT,() => console.log(`server listening on port ${PORT}`));