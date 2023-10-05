import {NextResponse} from "next/Server"



export async function GET(request: Request, context: {courseId}) {    
    const courseId = params.courseId;
    const course = await Course.findById(courseId);
    NextResponse.json({ course });}