const mysql=require('mysql');
const connection=mysql.createConnection({
	host:'localhost',
	port:3306,
	database:'demo',
	user:'root',
	password:'empower'
});
connection.connect((err)=>{
	if(err){
		console.log(err)
	}
	console.log('Connected')
});
module.exports=connection;