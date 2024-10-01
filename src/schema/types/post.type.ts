import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { UserType } from "./user.type";

export const PostType = new GraphQLObjectType({
    name:"Post",
    fields:()=>({
        _id: {type: GraphQLID},
        title:{type: GraphQLString},
        content:{type: GraphQLString},
        userID:{type: UserType},
    })
})













