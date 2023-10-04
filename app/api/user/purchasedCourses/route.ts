export async function GET(request: Request) {const user = await User.findOne({ username: req.headers.user}).populate('purchasedCourses');
if (user) {
  res.json({ purchasedCourses: user.purchasedCourses || [] });
} else {
  res.status(403).json({ message: 'User not found' });
}}