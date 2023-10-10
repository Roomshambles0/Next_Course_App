import { getCurrentAdmin } from '@/app/actions/getCurrentAdmin';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { Pclient } from '@/lib/prismadb';
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
  try{
    const body =await request.json();
    const {course} = body;
    const user = await getCurrentUser();
    if(user){
      if(user.role == "ADMIN"){
        const admin =await getCurrentAdmin();
       const createCourse =  await Pclient.course.create({
          data: {
           title: course.title,
           description: course.description,
           imageLink: course.imageLink,
           published: course.published,
           teacher: {
              connect: {
                  id: admin?.id
              }
           }
          }
        })
        return NextResponse.json({"message":"Course created succefully",CourseId:createCourse.id})
      }else{
        NextResponse.json({message:"user is not admin"},{status:400})
    }
    }else{
      NextResponse.json({message:"user not found"},{status:400})
    }

  }catch(e){
    console.log(e);
    NextResponse.json({Error:'Internal Error'},{status:500})
  }
}

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser();
    if(user){
        if(user.role == "ADMIN"){
          const admin = await Pclient.admin.findUnique({
            where: {
                email: user?.email,
            },
            include:{
                courses:true,
            }
        })
       const courses = admin?.courses;
    
       return NextResponse.json({courses})
        }else{
          NextResponse.json({message:"user is not admin"},{status:400})
      }
    }else{
      NextResponse.json({message:"user not found"},{status:400})
    }

}catch(e){
    NextResponse.json({status:400})
}
}