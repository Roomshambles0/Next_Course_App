import { Pclient } from "@/lib/prismadb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

export async function POST(
    request: Request
  ){
    const body = await request.json();
    var {name,username,password} = body;
    console.log(body);
    const role = Role.ADMIN;
    const hashedpassword = await bcrypt.hash(password, 12);
    const student = await Pclient.admin.create({
        data:{
            email:username,
            name,
            hashedpassword
        }
    })
     
    //creating user for next auth
    const user = await Pclient.user.create({
        data:{
            email:username,
            name,
            role
        }
    })
    return NextResponse.json(student);

}