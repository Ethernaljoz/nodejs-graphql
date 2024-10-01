import { UserModel } from "../../models/user.model";
import { UserType } from "../types/user.type";
import { GraphQLList } from "graphql"


export const GET_ALL_USER = {
    type: GraphQLList(UserType),
    async resolve(){
        const users = await UserModel.find()

        return users
    }
}




























































