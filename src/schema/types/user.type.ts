import {  GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



export const UserType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        _id: {type : GraphQLID} ,
        name:{type :GraphQLString},
        email:{type :GraphQLString},
        phone:{type :GraphQLString},
    })
})

