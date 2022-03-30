module.exports=function(app){ //codigo em modulo recebendo função de app

	app.get('/formulario', function(req, res){
		res.render('admin/formulario.ejs');
	});
}