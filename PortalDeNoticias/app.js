const express=require('express');//Importação do express
const app=express();//Execução do express
app.set('view-engine','ejs');//configuração do ejs como motor de telas
app.set('views','./app/views');//alteração do diretório da pasta views



app.get('/',function(req,res){//caminho para a página principal do app
	res.render('home/index.ejs');
});


app.get('/noticia',function(req,res){//caminho para a página de notícia
	res.render('noticias/noticia.ejs');
});


app.get('/formularioinclusaonoticia',(req,res)=>{//caminho para a página do formulário de inclusão de noticia
	res.render('admin/form_add_noticia.ejs');
});



app.listen('3000',function(){//servidor rodando na porta 3000
	console.log('Servidor rodando na porta 3000');
});