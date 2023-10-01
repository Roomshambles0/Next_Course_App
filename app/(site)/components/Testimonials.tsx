
import Carousel from 'better-react-carousel';
import TestimonialCard from './TestimonialCard';


const Testimonial = [{
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
},{    
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
},{
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
},{
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
},{
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
},{ 
name:"Roronoa Zoro",
id:"@Sentoriyu",
img:"/roronoa.png",
p:"One of the standout features of the 100xdevs Full-Stack Cohort program is the hands-on experience it provides. Through a series of real-world projects, I had the opportunity to apply what I learned in a practical setting. This practical experience was instrumental in building my confidence and competence as a full-stack developer.The support and mentorship provided throughout the program were outstanding. The instructors and mentors were always available to answer questions, provide guidance, and offer constructive feedback. This level of support made the learning journey much smoother and more enjoyable."
}]


export default function Testimonials(){
    
    return <div className='bg-black '>
        <h1 className='text-white font-mono font-semibold text-5xl py-20 px-10'>Testimonials</h1>
    <div>
    <Carousel cols={3} rows={1}>
       {Testimonial.map((test:any)=>
       {
        return <Carousel.Item> 
           <TestimonialCard 
            name = {test.name}
            id = {test.id}
            img = {test.img}
            p = {test.p}
           ></TestimonialCard>
           </Carousel.Item>
       })
       } 
       </Carousel>
       </div>
       </div>     
  }
  
  