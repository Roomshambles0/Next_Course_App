import { Pclient } from "@/lib/prismadb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { studentInput } from "@/lib/validations/userInput";

export async function POST(
    request: Request
  ){
    try{
        const body = await request.json();
        console.log(body)
        const {name,username,password} = body;
    
        const parsedadminInput = studentInput.safeParse(body);
        if(!parsedadminInput.success){
           return NextResponse.json({"message":"add correct Input"},{status:403});
        }
        console.log(parsedadminInput)
    
    
        const role = Role.USER;
        const hashedpassword = await bcrypt.hash(password, 12);
        const student = await Pclient.student.create({
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
      return NextResponse.json({message:"Account created successfully",name:username});
    }catch (error) {
        console.error(error);
       return NextResponse.json({ message: "internal server error" });
      }
}