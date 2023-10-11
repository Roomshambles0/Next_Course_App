
import CourseCard from './CourseCard';
import  LandingText  from './LandingText';
import Companies from './Companies';
import Testimonials from './Testimonials';
import Signup from '../../auth/User/Signup/page';

export default function Landing(){
    return<>
<LandingText></LandingText>
<CourseCard></CourseCard>
<Companies></Companies>
<Testimonials></Testimonials>
<Signup></Signup>    </>
}