import { getCurrentstudent } from "@/app/actions/getCurrentStudent";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Pclient } from "@/lib/prismadb";
import { NextResponse } from "next/server";


interface IParams {
  courseId?: number;
}



export async function POST( request: Request,
  { params }: { params: IParams }) {
try {  
  const user = await getCurrentstudent()
  const { courseId } = params;
  
  if(user){
  const course = await Pclient.course.findUnique({
    where:{
      id:courseId
    }
  })
 
  if(!course) {
    throw new Error('Course not found');
  }

  const updatedStudent = await Pclient.student.update({
    where: {
      id: user.id,
    },
    data: {
      purchasedcourses: {
        connect:{
            id: course.id
          },
      },
    },
  });
 NextResponse.json({message:"course purchased successfully"} ,{status:200})
  }
}catch(e){
  NextResponse.json(null);
}

   
  }