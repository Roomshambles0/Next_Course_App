import { Pclient } from "@/lib/prismadb";
import { NextResponse } from "next/server";




export async function GET(request: Request) {
try {
    const courses = await Pclient.course.findMany(
      {
        where:{
          published:true
        }
      }
    );

    if (courses) {
      return NextResponse.json({ courses });
    } else {
      return NextResponse.json({ message: "courses not found" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "internal server error" }, { status: 500 });
  }
}