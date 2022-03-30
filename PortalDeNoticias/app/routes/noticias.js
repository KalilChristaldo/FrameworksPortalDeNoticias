const dbConnection=require('../../config/dbConnection'); //encontrando local do arquivo dbConnection

module.exports=function(app){ // codigo em modulo

	var connection=dbConnection(); //armazenando a const dbConnection em uma variavel

	app.get('/noticias', function(req, res){ //obrigatorio ter dois parametros dentro da funcao 

		connection.query('select * from noticias', function (error, result){ //query usado para qualquer parametro que eu queira mostrar
			if (error) {
				console.log(error)
			}
			res.render('noticias/noticia.ejs', {noticias:result}); 
		});
	});
};