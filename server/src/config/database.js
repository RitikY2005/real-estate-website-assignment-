import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env-variables.js";


async function connectToDatabase(){
    try{
        const {connection}=await mongoose.connect(MONGODB_URI);
        console.log(`Connected to database -> ${connection.host}`);
    } catch(error){
        console.log(`Error in connection to database -> ${JSON.stringify(error)}`);
        process.exit(1);
    }
}

export default connectToDatabase;