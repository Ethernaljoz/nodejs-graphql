import mongoose from "mongoose";

interface UserDocument extends mongoose.Document {
    name:string,
    email:string,
    phone:string,
}


const userSchema = new mongoose.Schema<UserDocument>({
    name : {type:String,required:true},
    email : {type:String ,required:true, unique:true},
    phone :{type:String,required:true}
})

export const UserModel = mongoose.model<UserDocument>('User',userSchema)