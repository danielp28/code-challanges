var mysql = require("mysql");


$("#submit").on("click", function(e){
  e.preventDefault();
  var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "tomsawyer",
    database: "kill_trakerdb"
  });
  
  connection.connect(function(err) {
      if (err) throw err;
  
  
      connection.query("SELECT * FROM gameTracker", function (err, result){
          if(err) throw err;
          console.log(result)
      });
    });
} )


