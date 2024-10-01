import { GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../types/user.type";
import { UserModel } from "../../models/user.model";


export const CREATE_USER = {
    type : UserType,
    args:{
        name: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        phone: {type: GraphQLNonNull(GraphQLString)},
    },
    async resolve(parent, args){
        const user = await UserModel.create({
            name: args.name,
            email: args.email,
            phone: args.phone,
        })

        if(!user){
            throw new Error("failed to create user")
        }

        return user
    }
}