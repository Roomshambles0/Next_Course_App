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
         return   NextResponse.json({"message":parsedadminInput.error},{status:403});
        }
    
    
        const role = Role.ADMIN;
        const hashedpassword = await bcrypt.hash(password, 12);
        //creating user for next auth
        const user = await Pclient.user.create({
            data:{
                email:username,
                name,
                role
            }
        })
       
       if(user){
        const student = await Pclient.admin.create({
        data:{
            email:username,
            name,
            hashedpassword
        }
    })
     
    return NextResponse.json({message:"Account is created successfully", name:username});
}else{
    return NextResponse.json({message:"take another username "},{status:401});
}
        
    
    }catch (error) {
        console.error(error);
        return NextResponse.json({ message: "internal server error" });
      }
   
}