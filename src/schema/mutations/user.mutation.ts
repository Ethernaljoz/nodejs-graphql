import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
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


export const UPDATE_USER = {
    type : UserType,
    args:{
        id : { type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type:GraphQLString},
    },
    async resolve(parent, args){
        const { id, name: newName, email:newEmail, phone:newPhone} = args

        const user = await UserModel.findById(id)
        if(!user){
            throw new Error("User not found")
        }
        await UserModel.findByIdAndUpdate({_id: id},{
            name : newName ? newName : user.name,
            email : newEmail ? newEmail : user.email,
            phone : newPhone ? newPhone : user.phone,
        },{
            new:true
        })

        return user
    }
}



export const DELETE_USER = {
    type : UserType,
    args:{id : { type: GraphQLID}},
    async resolve(parent, args){
        const { id } = args

        const user = await UserModel.findById(id)
        if(!user){
            throw new Error("User not found")
        }
        await UserModel.deleteOne({_id: user._id})

        return user
    }
}


