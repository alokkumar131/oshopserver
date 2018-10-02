var db=require('../database/database');
var Users={
	getUsers:function(callback){
		var url="SELECT email,first_name,last_name,isadmin,gender,mobile from users"
        return db.query(url,callback);
	},
	newUser:function(User,callback){
		var today=new Date();
		var isadmin=false;
		User.created=today;
		User.isadmin=isadmin;
		console.log(User)
		return db.query("INSERT INTO users values(?,?,?,?,?,?,?,?,?)",
		[
			User.id,
		User.first_name,
		User.last_name,
		User.email,
		User.password,
		User.created,
		User.isadmin,
		User.mobile,
		User.gender
		
		
		
	   ],callback);
	},
	Login:function(user,callback){
	  var url="SELECT * from users WHERE email=?"
      db.query(url,[user.email],callback);
	}
}
module.exports=Users;




