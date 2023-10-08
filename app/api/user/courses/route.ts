import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const courses = await Course.find({published: true});
    NextResponse.json({ courses });
}