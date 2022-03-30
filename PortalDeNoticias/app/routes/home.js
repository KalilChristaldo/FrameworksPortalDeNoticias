module.exports=function(app){
	
	app.get('/', function(req, res){ //função get para pegar esses parametro, "/" para digitar no navegador, toda vez que o usuario requerir 
		res.render('home/index.ejs');
	});
}