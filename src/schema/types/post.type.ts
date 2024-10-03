import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { UserType } from "./user.type";
import { resolve } from "path";
import { UserModel } from "../../models/user.model";

export const PostType = new GraphQLObjectType({
    name:"Post",
    fields:()=>({
        _id: {type: GraphQLID},
        title:{type: GraphQLString},
        content:{type: GraphQLString},
        userID:{
            type: UserType,
            async resolve(parent, args){
                const user = await UserModel.findById(parent._id)
                if(!user){
                    throw new Error("user not found")
                }
                return user
            }

        },
    })
})













