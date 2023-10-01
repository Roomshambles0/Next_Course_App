 
import {BiSolidRightArrow} from "react-icons/bi";
import {FaGreaterThan} from "react-icons/Fa"
import Carousel from 'better-react-carousel';
import Image from "next/image";

const CoursetoD = [
  {name:"Full-Stack Cohort",
   desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
   img:"/course2.jpg"
},
{name:"Full-Stack Cohort",
desc:"Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that",
img:"/course2.jpg"
}
]




export default function CourseCard(){

    return<>  
  <div className="course-card-grid grid grid-cols-10 gap-2">
    <CourseText></CourseText>
    <div className=" col-start-6 col-span-4">
    <Carousel cols={1} rows={1} loop={true} >
  {CoursetoD.map((test:any)=>
       {
        return <Carousel.Item> 
           <CourseCard2 
            Cname = {test.name}
            desc= {test.desc}
            img = {test.img}
           ></CourseCard2>
           </Carousel.Item>
       })
       } 
  </Carousel>
  </div>
  
  </div> 
  </>
}




const CourseCard2 = (props:any) =>{
return <div>
<div className="mx-auto w-full  bg-black border-solid border-2 border-white rounded-lg text-white overflow-hidden shadow-md h-full ">
<div className="md:shrink-0 flex h-full ">
<Image className=" object-cover rounded h-full w-full"   width={500}
      height={500} src={props.img} alt="" />
</div>
<div className="p-8">
<h1>{props.Cname}</h1>
<p>{props.desc}</p>
</div>
</div>
</div>
}


const CourseText= ()=>{

  return <div className="col-span-5 text-white mx-10 md:w-1/2  lg:w-full">
  <h1 className="font-mono font-bold lg:text-6xl  sm:text-5xl border-b border-white w-60">COURSES</h1>
 <div className="pt-10">
  <p className="py-5 text-3xl font-semibold">Web Development Bootcamp: Full Stack Fundamentals</p>
  <p className="py-5 text-3xl font-semibold">Mobile App Development with React Native</p>
  <p className="py-5 text-3xl font-semibold">Data Structures and Algorithms in Java</p>
  <p className="py-5 text-3xl font-semibold">DevOps and Continuous Integration/Deployment (CI/CD)</p>
  </div>
  <div className="py-2 my-2 flex justify-center border rounded-full w-40 font-bold font-sans font-xl hover:bg-white hover:text-stone-800 "> <button className="px-2 mx-2 ">join us</button><button className="py-2"><FaGreaterThan size={20}/></button></div>
  </div>
}



const Forwardicon = () =>{
  return <div className="col-end-11 col-span-1 mt-40 lg:pt-20 lg:ml-20">
 <button className="text-white"><BiSolidRightArrow size={40}/></button>
  </div>
}