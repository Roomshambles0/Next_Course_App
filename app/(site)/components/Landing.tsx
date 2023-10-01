
import CourseCard from './CourseCard';
import  LandingText  from './LandingText';
import Companies from './Companies';
import Testimonials from './Testimonials';
import Signup from './Signup';
import Navbar from './Navabar';

export default function Landing(){
    return<>
    <Navbar></Navbar>
<LandingText></LandingText>
<CourseCard></CourseCard>
<Companies></Companies>
<Testimonials></Testimonials>
<Signup></Signup>
    </>
}