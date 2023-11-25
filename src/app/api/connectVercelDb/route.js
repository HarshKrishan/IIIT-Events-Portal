import { db} from "@vercel/postgres";

const connectVercelDb = async () =>{

    
    try{
        const client = await db.connect();
        // const client = await db.connect();
          console.log("VercelDb Connected!");
          return client;
    }catch(error){
        console.log("error connecting sql",error)
    } 
}

export default connectVercelDb;