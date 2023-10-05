import { NextResponse } from 'next/server';

export async function PUT(request, context: { params }) {
    const admin = await Admin.findOne({username:req.headers.user}).populate('createdCourses');
    if (admin) {
      NextResponse.json({ createdCourses: admin.createdCourses || [] });
    } else {
      NextResponse.json({ message: 'not found' },{status:403});
    }
  }
  