const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8855;

app.get('/',(req,res)=>{
    res.send("Testando a API.");
});

app.listen(PORT, ()=>{
    console.log("API rotando na porta "+PORT);
});