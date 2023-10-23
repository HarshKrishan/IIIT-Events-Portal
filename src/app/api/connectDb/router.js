import mysql from 'mysql';
// import mongoose from 'mongoose';

// const connectMongoDB = () => {
//     try {
//         mongoose.connect(process.env.MONGODB_URI)
//         console.log('MongoDB connected')
//     } catch (error) {
//         console.log("error connecting mongodb",error)
//     }
// }

// export default connectMongoDB;
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "eventsportal",
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
