import express from 'express'
import { BD, testarConexao } from './db.js'
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js'
import cors from 'cors'

// Importando rotas
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import rotasProdutos from './src/routes/rotasProdutos.js'


const app = express();
app.use(express.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
app.use(cors());

// Adicione:
app.get('/swagger', (req, res) => {
    res.send(`<!DOCTYPE html>
<html><head>
  <title>API Ordens de Serviço</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
</head><body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
  <script>
    SwaggerUIBundle({
      spec: ${JSON.stringify(documentacao)},
      dom_id: '#swagger-ui'
    })
  </script>
</body></html>`);
});

app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json("Api Funcionando")
    res.redirect('/swagger')
})

// Utilizando rotas
app.use(rotasUsuarios);
app.use(rotasProdutos);

const porta = Number(process.env.PORT) || 3001;
const host = process.env.HOST || '0.0.0.0';

app.listen(porta, host, () => {
    console.log(`API produtos rodando em http://localhost:${porta}`)
    console.log(`Acesso em rede: http://SEU_IP_LOCAL:${porta}`)
})
