import { getCurrentAdmin } from '@/app/actions/getCurrentAdmin';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { Pclient } from '@/lib/prismadb';
import { NextResponse } from 'next/server';



interface IParams {
  courseId?: string;
}


export async function PUT(request:Request, { params }: { params: IParams }) {
   try{
    const body =await request.json();
    const course = body;
    const { courseId } = params;
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
  