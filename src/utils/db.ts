import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";



export const connectDB = async()=>{
    await mongoose.connect(MONGO_URI).then(()=>{console.log("mongodb connected")}).catch((e)=>{
        console.log(e) 
        process.exit(1)
    })
}