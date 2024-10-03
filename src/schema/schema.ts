import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./mutations/user.mutation";
import { GET_ALL_USER, GET_USER } from "./queries/user.query";
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./mutations/post.mutation";
import { GET_ALL_POST, GET_POST } from "./queries/post.query";


const RootQueries = new GraphQLObjectType({
    name: "RootQuery",
    fields :{
        getAllUser : GET_ALL_USER,
        getUser : GET_USER,

        getAllPost : GET_ALL_POST,
        getPost: GET_POST
        
    },
});

const Mutations = new GraphQLObjectType({
    name:"Mutations",
    fields:{
        createUser : CREATE_USER,
        updateUser : UPDATE_USER,
        deleteUser : DELETE_USER,

        createPost : CREATE_POST,
        updatePost : UPDATE_POST,
        deletePost : DELETE_POST
    }
})

export const schema = new GraphQLSchema({
    query: RootQueries,
    mutation: Mutations
})