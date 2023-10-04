export async function POST(request: Request) {const course = await Course.findById(req.params.courseId);
    if (course) {
      const courseId: mongoose.Types.ObjectId = course._id;
      const user = await User.findOne({ username: req.headers.user });
      if (user) {
        user.purchasedCourses.push(courseId);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }