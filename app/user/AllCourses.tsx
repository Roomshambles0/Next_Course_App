import Carousel from "better-react-carousel"
import { useState,useEffect } from "react"
import axios from "axios"
import { useSetRecoilState,useRecoilValue } from "recoil"
import { courseState, coursesstate } from "../../store/atoms/course"
import { coursesDetails } from "../../store/selectors/courses"






export const PageCourse = () =>{
const setAllcourses = useSetRecoilState(coursesstate) 

const init = async () => {
    const response = await axios.get(`http://localhost:3001/user/courses`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = response.data.courses;
    console.log(data);
    setAllcourses({
        isLoading: false,
        courses: data
    })
}

useEffect(() => {
    init();
}, []);

    return(<div className="md:pt-60 lg:pt-48 bg-black w-full h-full ">
        <Allcourses></Allcourses>
    </div>)
}

const Allcourses = (props:any)=>{
    const Courses = useRecoilValue(coursesDetails)
    return(
        <div className="bg-black w-full h-full pt-48">
              <h1 className="text-white mx-3 py-3 font-mono font-bold text-3xl border-b-8 w-fit rounded-lg h-full">Courses on Full Stack Devolepment</h1>
            <div className="p-8 ">
            <div className="course-grid grid grid-cols-3 gap-10">
       {Courses.map((test:any)=>
       {
        return (
           <CourseCard 
            Cname = {test.title}
            desc= {test.description}
            img = {test.imageLink}
            price = {test.price}
            id = {test._id}
           ></CourseCard>
        )
       })
       } 
       </div>
       </div>
       </div>
    )
}




const CourseCard = (props:any) =>{
    const id = props.id;
    return <div>
    <div className="mx-auto w-full  bg-black border-solid border-2 border-white rounded-lg text-white overflow-hidden shadow-md  ">
    <div className="md:shrink-0 flex h-full ">
    <img className=" object-cover rounded h-full w-full" src={props.img} alt="" />
    </div>
    <div className="p-8">
    <h1 className="text-5xl font-bold pb-5">{props.Cname}</h1>
    <p className="text-stone-400 text-left ...">{props.desc}</p>
    <p className="pt-2 font-extrabold text-lg ">{props.price}</p>
    </div>
    <button className="mx-8 mb-5 p-2 border rounded-lg font-semibold font-mono hover:bg-white hover:text-black" onClick={async () => {
                  console.log(localStorage.getItem("token"));
                     axios.post(`http://localhost:3001/user/courses/` + id,{
                        headers: {

                          Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    alert("course " + props.Cname +" purchased")
                    }}>Purchase</button>
    </div> 
    </div>
    }



