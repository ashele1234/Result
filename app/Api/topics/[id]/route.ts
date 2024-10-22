import DbConfig from "@/app/DbConfig";
import Topic from "@/app/models/TopicModel";
import { NextResponse } from "next/server";


export const  PUT=async(request:any,params:any)=>{
    await DbConfig()
 const {id}=params;
  const {Newtitle:title,Newdescription:description}=request.json()
  await Topic.findByIdAndUpdate(id,{title,description})
  return NextResponse.json({message:"Topic Updated"},{status:201})
}

export const  GET=async(request:any,params:any)=>{
    await DbConfig()
 const {id}=params;
  const topic=await Topic.findOne({_id:id})
  return NextResponse.json({topic},{status:201})
}