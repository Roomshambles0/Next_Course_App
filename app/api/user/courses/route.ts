import { Pclient } from "@/lib/prismadb";
import { NextResponse } from "next/server";




export async function GET(request: Request) {
const courses = await Pclient.course.findMany();
    NextResponse.json({ courses });
}