import { getCurrentAdmin } from '@/app/actions/getCurrentAdmin';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { Pclient } from '@/lib/prismadb';
import { NextResponse } from 'next/server';



interface IParams {
  courseId?: number;
}


export async function PUT(request:Request, { params }: { params: IParams }) {
   try{
    const body =await request.json();
    const {course} = body;
    const { courseId } = params;
    const admin = await getCurrentAdmin();
    if(admin){
          const updateCourse = await Pclient.course.update({
            where: {
              id: courseId,
              teacherId:admin.id
            },data:{
              title: course.title,
              description: course.description,
              imageLink: course.imageLink,
              published: course.published
            }
           }
          )
          return NextResponse.json({message:"course updated successfully" ,update:updateCourse})
        }else{
          return NextResponse.json({message:"admin not found"},{status:400})
        }
    
   }catch(e){
    NextResponse.json(null);
   }
  }
  