// TEMPORARY DATA

import { Post, User } from "./models";
import { connectToDb } from "./util";

export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch posts!");
    }
};

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post = await Post.findOne(slug);
        return post;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch post!");
    }
};

export const getUsers = async () => {
    try{
        connectToDb();
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch users!");
    }
};

export const getUser = async (id) => {
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch user!");
    }
};