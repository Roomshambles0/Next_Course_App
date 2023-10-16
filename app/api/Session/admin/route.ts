import { getCurrentAdmin } from "@/app/actions/getCurrentAdmin";
import { Pclient } from "@/lib/prismadb";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    try {
      const admin = await getCurrentAdmin();
  
      if (admin) {
        return NextResponse.json({ email: admin.email });
      } else {
        return NextResponse.json({ message: "student not found" });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "internal server error" });
    }
  }