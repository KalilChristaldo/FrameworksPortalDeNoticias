const express=require('express'); //importa o express
const app=express(); //executa a função express
app.set('view-engine', 'ejs'); //definir o motor de tela em ejs
app.set('views', './app/views'); //dois parametros separados por virgula 

module.exports=app; //mostra novamente que é um modulo, importando app