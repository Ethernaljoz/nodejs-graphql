import { UserModel } from "../../models/user.model";
import { UserType } from "../types/user.type";
import { GraphQLID, GraphQLList } from "graphql"


export const GET_ALL_USER = {
    type: GraphQLList(UserType),
    async resolve(){
        const users = await UserModel.find()

        return users
    }
}


export const GET_USER = {
    type: UserType,
    args: {id : {type: GraphQLID}},
    async resolve(parent, args){
        const {id} = args

        const user = await UserModel.findById(id)
        if(!user){
            throw new Error('User not found')
        }

        return user
    }
}

























































