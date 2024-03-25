import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {

  const {slug} = params;

  try{
    connectToDb();
    const post = await Post.findOne({slug});
    //posts가 있다면 json 반환
    return NextResponse.json(post);

  }catch(err){
    console.log(err);
    throw new Error("failed to fetch post!")
  }

}

export const DELETE = async (request, {params}) => {

  const { slug } = params;

  try{
    connectToDb();
    await Post.deleteOne({slug});
    //posts가 있다면 json 반환
    return NextResponse.json("Post deleted!");

  }catch(err){
    console.log(err);
    throw new Error("failed to delete post!")
  }

}