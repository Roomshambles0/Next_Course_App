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
    res.json({ message: 'Course created successfully', courseId: course.id });
    } else {
      res.status(403).json({ message: 'admin not found' });
    }
    }else {
      res.status(404).json({ message: 'Course not created' });
    }
}

export async function GET(request: Request) {const admin = await Admin.findOne({username:req.headers.user}).populate('createdCourses');
if (admin) {
  res.json({ createdCourses: admin.createdCourses || [] });
} else {
  res.status(403).json({ message: 'not found' });
}
}