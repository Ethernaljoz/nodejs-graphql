import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { UserType } from "./user.type";
import { UserModel } from "../../models/user.model";

export const PostType = new GraphQLObjectType({
    name:"Post",
    fields:()=>({
        _id: {type: GraphQLID},
        title:{type: GraphQLString},
        content:{type: GraphQLString},
        user:{
            type: UserType,
            async resolve(parent, args){
                return await UserModel.findById(parent.userID)
            }

        },
    })
})













