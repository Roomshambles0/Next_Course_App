"use client";
import Carousel from "better-react-carousel"
import { useState,useEffect } from "react"
import axios from "axios"
import { useSetRecoilState,useRecoilValue } from "recoil"
import { courseState, coursesstate } from "@/lib/store/atoms/course"
import { coursesDetails } from "@/lib/store/selectors/courses"
import { useRouter } from "next/navigation"





export const Created = ()=>{
  const setAllcourses = useSetRecoilState(coursesstate); 
  let courseDetail = useRecoilValue(coursesstate);
  let courses = courseDetail.courses;
  const init = async () => {
    const response = await axios.get(`http://localhost:3001/admin/courses`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = response.data.createdCourses;
    setAllcourses({
        isLoading: false,
        courses: data
    })
}

useEffect(() => {
    init();
}, []);

    return(<div>  
        <div className="bg-stone-800 text-white h-full font-mono font-semibold text-7xl lg:pt-64 md:pt-72  flex justify-center px-10">Your Courses</div> 
    <div className="course-grid grid grid-cols-3 gap-10">
{courses.map((test:any)=>
       {
        return <div className="p-5">
           <CourseCard 
            Cname = {test.title}
            desc= {test.description}
            img = {test.imageLink}
            id = {test._id}
           ></CourseCard>
           </div>
       })
       } 
    </div> </div> )
}



export const CourseCard = (props:any) =>{
  const router = useRouter();
  const id = props.id;
    return <div className="">
    <div className="mx-auto w-full bg-black border-solid border-2 border-white rounded-lg text-white overflow-hidden shadow-md ">
    <div className="md:shrink-0 flex h-full ">
    <img className=" object-cover rounded h-full w-full" src={props.img} alt="" />
    </div>
    <div className="p-8">
    <h1 className="text-5xl font-bold pb-5">{props.Cname}</h1>
    <p className="text-stone-400 text-left ...">{props.desc}</p>
    </div>
    <div className="">
    <button className="mx-8 mb-5 p-2 border rounded-lg font-semibold font-mono hover:bg-white hover:text-black" onClick={()=>{router.push('/admin/updatecourses/' + id)}}>Edit</button>
    </div>
    </div>
    </div>
    }
