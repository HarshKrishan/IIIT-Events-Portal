import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "192.168.1.7",
  port: 3306,
  database: "mydatabase",
  user: "webadmin",
  password: "Web@2023",
});
const connectSql = ()=>{
    try{
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });

    }catch(error){
        console.log("error connecting sql",error)
    } 
   
}


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export default connectSql;
