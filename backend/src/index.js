import express from "express"; // nova forma padrão do ESMscript para importar no nodejs
import morgan from "morgan" // para mostrar ao desenvolvedor os logs de acesso à API.
//require('dotenv').config();

const app = express();
app.use(morgan("combined"));

const PORT = process.env.PORT || 8855;

app.get('/',(req,res)=>{
    res.send("Testando a API.");
});

app.listen(PORT, ()=>{
    console.log("API rotando na porta "+PORT);
});