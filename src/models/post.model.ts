import mongoose from "mongoose";

interface PostDocument extends mongoose.Document{
    title: string,
    content:string,
    createdAt: Date,
    updateAt: Date
} 

const postSchema = new mongoose.Schema<PostDocument>({
    title:{type:String, require:true},
    content:{type:String, require:true}
},{timestamps:true})

export const PostModel = mongoose.model<PostDocument>("Post", postSchema)