import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request) => {

  try{
    connectToDb();
    const posts = await Post.find();
    //posts가 있다면 json 반환
    return NextResponse.json(posts);

  }catch(err){
    console.log(err);
    throw new Error("failed to fetch posts!")
  }

}