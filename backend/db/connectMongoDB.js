import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`ERROR connection to mongoDB: ${error.message}`);
        process.exit(1);
    }
}
export default connectMongoDB;