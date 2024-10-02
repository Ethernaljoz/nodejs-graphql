import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/user.mutation";
import { GET_ALL_USER, GET_USER } from "./queries/user.query";


const RootQueries = new GraphQLObjectType({
    name: "RootQuery",
    fields :{
        getAllUser : GET_ALL_USER,
        getUser : GET_USER,
        
    },
});

const Mutations = new GraphQLObjectType({
    name:"Mutations",
    fields:{
        createUser : CREATE_USER,
        updateUser : UPDATE_USER,
        deleteUser : DELETE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQueries,
    mutation: Mutations
})