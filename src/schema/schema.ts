import { GraphQLSchema, GraphQLObjectType } from "graphql";


const RootQueries = new GraphQLObjectType({
    name: "RootQuery",
    fields :{
        
    },
});

const Mutations = new GraphQLObjectType({
    name:"Mutations",
    fields:{

    }
})

export const schema = new GraphQLSchema({
    query: RootQueries,
    mutation: Mutations
})