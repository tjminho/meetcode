// TEMPORARY DATA

import { Post } from "./models";
import { connectToDb } from "./util";

// const users = [
//     {id:1, name: 'minho'},
//     {id:2, name: 'minho'}
// ]

// const posts = [
//     {id:1, title: 'Post 1', body: '.....', userId: 1},
//     {id:2, title: 'Post 2', body: '.....', userId: 1},
//     {id:3, title: 'Post 3', body: '.....', userId: 2},
//     {id:4, title: 'Post 4', body: '.....', userId: 2},
// ]

export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch posts!")
    }
};

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post = await Post.find(slug);
        return post;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch post!")
    }
};

export const getUsers = async () => {
    try{
        connectToDb();
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch users!")
    }
};

export const getUser = async (id) => {
    try{
        connectToDb();
        const user = await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error("failed to fetch user!")
    }
};