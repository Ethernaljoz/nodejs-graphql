import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { PostType } from "../types/post.type";
import { PostModel } from "../../models/post.model";

export const CREATE_POST = {
  type: PostType,
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
    userID: { type: GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent, args) {
    const post = await PostModel.create({
      title: args.title,
      content: args.content,
      userID: args.userID,
    });

    if (!post) {
      throw new Error("failed to create post");
    }

    return post;
  },
};

export const UPDATE_POST = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    userID: { type: GraphQLID },
  },
  async resolve(parent, args) {
    const { id, title: newTitle, content: newContent, userID: newUserID } = args;

    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("post not found");
    }
    await PostModel.findByIdAndUpdate(
      { _id: id },
      {
        title: newTitle ? newTitle : post.title,
        content: newContent ? newContent : post.content,
        userID: newUserID ? newUserID : post.userID,
      },
      {
        new: true,
      }
    );

    return post;
  },
};

export const DELETE_POST = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    const { id } = args;

    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("post not found");
    }
    await PostModel.deleteOne({ _id: post._id });

    return post;
  },
};
