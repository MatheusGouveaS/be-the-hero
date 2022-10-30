const express = require('express'); /*Importa o móduo do express para o projeto */
const cors = require('cors');
const routes = require('./routes');

const app = express(); /*Inicia a nossa aplicação com o express */

app.use(cors());
app.use(express.json()); /*Faz nosso backend reconhecer as Request Body no formato json */
app.use(routes);

app.listen(3333);