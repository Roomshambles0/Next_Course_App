import { NextResponse } from 'next/server'
import mongoose from 'mongoose';
import { Admin,Course } from '@/mongoose/schema';

export async function POST(request: Request) {
    const createdCourse = request.body;
    if(createdCourse){
    const course = new Course(createdCourse);
    const courseId: mongoose.Types.ObjectId = course._id;
    const admin = await Admin.findOne({ username: request.headers.user});
    console.log(admin);
    if(admin){
    await course.save();
    admin.createdCourses.push(courseId);
    await admin.save(); 
    NextResponse.json({ message: 'Course created successfully', courseId: course.id });
    } else {
      NextResponse.json({ message: 'admin not found' },{status:403});
    }
    }else {
      NextResponse.json({ message: 'Course not created' },{status:404});
    }
}

export async function GET(request: Request) {
  const admin = await Admin.findOne({username:req.headers.user}).populate('createdCourses');
if (admin) {
  NextResponse.json({ createdCourses: admin.createdCourses || [] });
} else {
  NextResponse.json({ message: 'not found' },{status:404});
}
}