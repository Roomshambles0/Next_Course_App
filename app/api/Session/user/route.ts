import { NextResponse } from "next/server";
import { getCurrentstudent } from "@/app/actions/getCurrentStudent";



export async function GET(request: Request) {
    try {
      const student = await getCurrentstudent();
  
      if (student) {
        return NextResponse.json({ email: student.email });
      } else {
        return NextResponse.json({ message: "student not found" });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "internal server error" }, { status: 500 });
    }
  }