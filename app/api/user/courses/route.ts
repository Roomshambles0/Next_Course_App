

export async function GET(request: Request) {
    const courses = await Course.find({published: true});
    res.json({ courses });
}