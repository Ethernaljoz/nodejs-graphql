import mongoose from "mongoose";

interface PostDocument extends mongoose.Document{
    title: string,
    content:string,
    userID: mongoose.Types.ObjectId,
} 

const postSchema = new mongoose.Schema<PostDocument>({
    title:{type:String, required:true},
    content:{type:String, required:true},
    userID:{type: mongoose.Schema.Types.ObjectId, required:true, ref: "User", index:true}
})

export const PostModel = mongoose.model<PostDocument>("Post", postSchema)