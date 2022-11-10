//import morgan from "morgan" // para mostrar ao desenvolvedor os logs de acesso à API.

import express from "express"; // nova forma padrão do ESMscript para importar no nodejs
//require('dotenv').config();
import logger from '../src/middlewares/logger'

const app = express();
app.use(logger("tiny"));

const PORT = process.env.PORT || 8855;

app.get('/',(req,res)=>{
    res.send("Testando a API.");
});

app.listen(PORT, ()=>{
    console.log("API rotando na porta "+PORT);
});