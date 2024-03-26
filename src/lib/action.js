"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./util";
import { signIn, signOut } from "./auth";
import github from "next-auth/providers/github";
import kakao from "next-auth/providers/kakao";
import google from "next-auth/providers/google";

export const addPost = async (formData) => {

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try{
    connectToDb();
    const newPost = new Post ({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("포스트 저장!");
    revalidatePath("/blog");
  }catch(err){
    console.log(err)
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {

  const { id } = Object.fromEntries(fomrData);

  try{
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("포스트 삭제!");
    revalidatePath("/blog");
  }catch(err){
    console.log(err)
    return { error: "Something went wrong!" };
  }
};

export const handleGoogleLogin = async (e) => {
  await signIn(google);
}

export const handleKakaoLogin = async (e) => {
  await signIn(kakao);
}

export const handleGithubLogin = async (e) => {
  await signIn(github);
}

export const handleLogout = async (e) => {
  await signOut();
}