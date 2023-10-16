import { Pclient } from "@/lib/prismadb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { adminInput } from "@/lib/validations/adminInput";

export async function POST(
    request: Request
  ){
    try{
        const body = await request.json();
        console.log(body)
        var {name,username,password} = body;
        
        const parsedadminInput = adminInput.safeParse(body);
        if(!parsedadminInput.success){
         return   NextResponse.json({"message":"add correct Input"},{status:403});
        }
    
    
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
        return NextResponse.json({message:"Account is created successfully", name:username});
    
    }catch (error) {
        console.error(error);
        return NextResponse.json({ message: "internal server error" });
      }
   
}