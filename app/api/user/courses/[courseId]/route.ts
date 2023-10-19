import { getCurrentstudent } from "@/app/actions/getCurrentStudent";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Pclient } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { IdInput } from "@/lib/validations/coursIdinput";

interface IParams {
  courseId?: string;
}



export async function POST( request: Request,
  { params }: { params: IParams }) {
try {  
  const user = await getCurrentstudent()
  const { courseId } = params;


  const parsedIdInput = IdInput.safeParse(courseId);
  if(!parsedIdInput.success){
     return NextResponse.json({"message":"add correct Input"},{status:403});
  }
  console.log(parsedIdInput)
  
  
  if(user){
  const course = await Pclient.course.findUnique({
    where:{
      id:parseInt(courseId as string)
    }
  })
 console.log(course)
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
 return NextResponse.json({message:"course purchased successfully"} ,{status:200})
  }
}catch(e){
  console.log(e)
  return NextResponse.json(null);
}
  }