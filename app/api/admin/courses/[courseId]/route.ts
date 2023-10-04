export async function PUT(request, context: { params }) {
    const admin = await Admin.findOne({username:req.headers.user}).populate('createdCourses');
    if (admin) {
      res.json({ createdCourses: admin.createdCourses || [] });
    } else {
      res.status(403).json({ message: 'not found' });
    }
  }
  }