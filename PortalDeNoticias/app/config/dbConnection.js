const mysql=require('mysql'); //require = importar, importando o parametro mysql

module.exports=function(){ //função de modulo, me diz que esse codigo é modulo
	return mysql.createConnection({ //criação da conexão do banco de dados 
		host: 'localhost',  //parametros.
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	}); 
}