"use client";

import { useRouter } from "next/navigation";
import {useEffect,useState} from 'react';
import { useRecoilValue ,useSetRecoilState} from "recoil";
import { adminEmailState,isAdminLoading } from "@/lib/store/selectors/adminsel";
import { userEmailState } from "@/lib/store/selectors/userEmail";
import { isUserLoading } from "@/lib/store/selectors/isUserLoading";
import { userState } from "@/lib/store/atoms/user"; 
import { adminState } from "@/lib/store/atoms/admin"; 


export default function Navbar(){
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const adminEmail = useRecoilValue(adminEmailState);
    const adminLoading = useRecoilValue(isAdminLoading);
    console.log(userEmail,adminEmail);
if(userEmail || adminEmail){
 if(userEmail){
return <Usernav name = {userEmail}></Usernav>
 }
 
if (adminEmail){
    return<Adminnav name = {adminEmail}></Adminnav>
}

}else{return(
    <LandingNav></LandingNav>)}

}




 function LandingNav(){
    

    
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button>Courses</button></p>
            <p className="navbar-elements navbar-border"><button>Events</button></p>
            <p className="navbar-elements navbar-border"><button>Blogs</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            <p className="navbar-elements navbar-border"><button>Create Courses</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="mx-5 hover:text-green-500 ">Log in</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full">join us</button>
        </div>
    </nav>
    </div>
  
}


export const Usernav = (props:any)=>{
    const setUser = useSetRecoilState(userState);
    const router= useRouter();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button>Courses</button></p>
            <p className="navbar-elements navbar-border"><button>my Learnings</button></p>
            <p className="navbar-elements navbar-border"><button>Community</button></p>
            
        </div>
        <div className="right-0 text-center py-1">
            <button className="px-10 md:pt-2 lg:pt-0 hover:bg-white hover:text-black" >{props.name}</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {localStorage.setItem("token", "");
                            setUser({
                                isLoading: false,
                                userEmail: ""
                            })
                            // router.push("/");
                        }}>Log out</button>
        </div>
    </nav>
    </div>
}





export const Adminnav = (props:any)=>{
    const setAdmin = useSetRecoilState(adminState);
    const router= useRouter();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button onClick={()=>{router.push("/admin/courses")}}>Your Courses</button></p>
            <p className="navbar-elements navbar-border"><button onClick={()=>{router.push("/admin/createcourse")}}>Create Course</button></p>
            <p className="navbar-elements navbar-border"><button>Manage Community</button></p>
        </div>
        <div className="right-0 text-center py-1">
            <button className="lg:px-10 md:pt-2 lg:pt-0 hover:bg-white hover:text-black" >{props.name}</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {localStorage.setItem("token", "");
                            setAdmin({
                                isLoading: false,
                                userEmail: ""
                            });
                            router.push("/");
                        }}>Log out</button>
        </div>
    </nav>
    </div>
}







