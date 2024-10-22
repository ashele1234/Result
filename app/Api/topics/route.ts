import { NextRequest ,NextResponse} from "next/server";


import Topic from "@/app/models/TopicModel";
import DbConfig from "@/app/DbConfig";

 export const POST= async(req:NextRequest,res:NextResponse)=>{
 try {
    DbConfig()
    const { title, description } = await req.json();
    const topic = await Topic.create({ title, description });
    return NextResponse.json({message:"Topic created", status: 201, data:topic});
 } catch (error) {
    throw new Error("Error creating topic");
 }
}
export const GET= async(res:NextResponse)=>{
    try {
       DbConfig()
       const topic = await Topic.find();
       return NextResponse.json({message:"Topic gotten", status: 201,data:topic});
    } catch (error) {
       throw new Error("Error getting topics");
    }
   }

   export const DELETE= async(req:NextRequest)=>{
    try {
       DbConfig()
      const id = req.nextUrl.searchParams.get("id");
      await Topic.findByIdAndDelete(id);
       return NextResponse.json({message:"Topic deleted", status: 201});
    } catch (error) {
       throw new Error("Error deleting topic");
    }
   }