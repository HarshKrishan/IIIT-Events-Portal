import mysql from 'mysql2';

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   database: "mydatabase",
//   user: "webadmin",
//   password: "Web@2023",
// });
// const connectSql = ()=>{
//     try{
//         connection.connect(function(err) {
//             if (err) throw err;
//             console.log("Connected!");
//         });

//     }catch(error){
//         console.log("error connecting sql",error)
//     } 
   
// }


// connection.connect(function(err) {
//     if (err) throw err;
//     // console.log("Connected!");
// });
const connectSql = null;    //uncomment these lines
const connection = null;    //uncomment these lines
export default connectSql;
export {connection};
