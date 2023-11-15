import  mongoose  from "mongoose";
import colors from "colors";

const connectDB=async () =>{
    try{
      const conn=await mongoose.connect(process.env.MONGO_URL)
      console.log(`Mongodb connected to ${conn.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`Error in monogdb ${error}`.bgRed.white);
    }
}

export default connectDB;