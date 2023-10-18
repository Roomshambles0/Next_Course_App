import getCurrentUser from "@/app/actions/getCurrentUser";
import { Pclient } from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";


export async function GET(request: Request){
try {
    const user = await getCurrentUser();
    if(!user){
       return NextResponse.json(null);
    }

    const student = await Pclient.student.findUnique({
        where: {
            email: user?.email,
        },
        include:{
            purchasedcourses:true,
        }
    })
   const courses = student?.purchasedcourses;
console.log(student)
   return NextResponse.json({courses})
}catch(e){
  return  NextResponse.json({status:400})
}
}