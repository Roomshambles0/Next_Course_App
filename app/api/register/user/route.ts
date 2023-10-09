import { Pclient } from "@/lib/prismadb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

export async function POST(
    request: Request
  ){
    const body = await request.json();
    var {email,name,password} = body;
    const role = Role.USER;
    const hashedpassword = await bcrypt.hash(password, 12);
    const student = await Pclient.student.create({
        data:{
            email,
            name,
            hashedpassword
        }
    })
     
    //creating user for next auth
    const user = await Pclient.user.create({
        data:{
            email,
            name,
            role
        }
    })
    return NextResponse.json(student);

}