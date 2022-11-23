//import morgan from "morgan" // para mostrar ao desenvolvedor os logs de acesso à API.

import express from "express"; // nova forma padrão do ESMscript para importar no nodejs
import logger from '../src/middlewares/logger'
import routes from "../src/routes/routes"
//require('dotenv').config();

const app = express();

app.use(logger("tiny"));
app.use(routes);

const PORT = process.env.PORT || 8855;

app.listen(PORT, ()=>{
    console.log("API rodando na porta "+PORT);
});