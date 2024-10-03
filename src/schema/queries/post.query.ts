import { PostModel } from "../../models/post.model";
import { GraphQLID, GraphQLList } from "graphql";
import { PostType } from "../types/post.type";


export const GET_ALL_POST = {
  type: GraphQLList(PostType),
  async resolve() {
    const posts = await PostModel.find();

    return posts;
  },
};

export const GET_POST = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    const { id } = args;

    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("User not found");
    }

    return post;
  },
};

