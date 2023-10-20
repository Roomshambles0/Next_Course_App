import { getCurrentAdmin } from '@/app/actions/getCurrentAdmin';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { Pclient } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import { courseInput } from '@/lib/validations/courseInput';
import { IdInput } from '@/lib/validations/coursIdinput';


interface IParams {
  courseId?: string;
}


export async function PUT(request:Request, { params }: { params: IParams }) {
   try{
    const body =await request.json();
    const parsedCourseInput = courseInput.safeParse(body);
    if(!parsedCourseInput.success){
       return NextResponse.json({"message":"add correct couese"},{status:403});
    }
    console.log(parsedCourseInput)


    const course = body;
    const { courseId } = params;
    const parsedIdInput = IdInput.safeParse(courseId);
    if(!parsedIdInput.success){
       return NextResponse.json({"message":"add correct Id"},{status:403});
    }
    console.log(parsedIdInput)

    const admin = await getCurrentAdmin();
   
    if(admin){
          const updateCourse = await Pclient.course.update({
            where: {
              id: parseInt(courseId as string),
            },data:{
              title: course.title,
              description: course.description,
              imageLink: course.imageLink,
              published: course.published,
              Price:course.Price
            }
           }
          )
          if(updateCourse){
            return NextResponse.json({message:"course updated successfully" ,update:updateCourse})
          }
          return NextResponse.json({message:"update course problem" })
        }else{
          return NextResponse.json({message:"admin not found"},{status:400})
        }
    
   }catch(e){
    console.log(e)
          return NextResponse.json({message:"Internal server Error"});
   }
  }
  