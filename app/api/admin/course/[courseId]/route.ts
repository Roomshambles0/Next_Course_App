export async function GET(request: Request) {    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({ course });}