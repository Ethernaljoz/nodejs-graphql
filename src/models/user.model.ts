import mongoose from "mongoose";

interface UserDocument extends mongoose.Document {
    name:string,
    email:string,
    phone:string,
    createdAt: Date,
    updatedAt : Date
}


const userSchema = new mongoose.Schema<UserDocument>({
    name : {type:String},
    email : {type:String ,require:true, unique:true},
    phone :{type:String}
},{timestamps:true})

export const UserModel = mongoose.model<UserDocument>('User',userSchema)