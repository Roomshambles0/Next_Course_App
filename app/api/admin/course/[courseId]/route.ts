import { NextResponse } from "next/server"
import { getCurrentAdmin } from "@/app/actions/getCurrentAdmin";
import { Pclient } from "@/lib/prismadb";
interface IParams {
    courseId?: string;
  }
  

export async function GET(request: Request, { params }: { params: IParams }) {    
    try{
        const courseId = params.courseId;
        const id = parseInt(courseId as string);
        const admin = await getCurrentAdmin();
        if(admin){
     const course = await Pclient.course.findUnique(
        {
          where:{
            id:id
          }  
        }
     )
     console.log(course)
     return NextResponse.json({course})
        }else{
           return NextResponse.json({message:"admin not found"})
        }
    }catch(e){
        console.log(e)
       return NextResponse.json(null);
    }
}