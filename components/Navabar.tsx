"use client";
import { useRouter } from "next/navigation";
import { useRecoilValue ,useSetRecoilState} from "recoil";
import { adminEmailState,isAdminLoading } from "@/lib/store/selectors/adminsel";
import { userEmailState } from "@/lib/store/selectors/userEmail";
import { signOut } from "next-auth/react";

export default function Navbar(){
const userEmail = useRecoilValue(userEmailState);
const adminEmail = useRecoilValue(adminEmailState);
console.log(userEmail,adminEmail);
if(userEmail || adminEmail){
 if(userEmail){
    return <Usernav name = {userEmail}></Usernav>
 }
 
if (adminEmail){
    return<Adminnav name = {adminEmail}></Adminnav>
}

}else{
    return(
    <LandingNav></LandingNav>
    )
}
}




 function LandingNav(){
const router = useRouter();
                return<div className="overflow-visible ">
             <nav className="navbar fixed z-50">
             <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
             <div className="right-0 text-center lg:py-1 md:py-5 pr-2">
             <button  className="mx-5 hover:text-green-500" onClick={() =>{
                router.push("/auth/Admin/Signup")
            }} >Create Courses</button>
            <button className="mx-5 hover:text-green-500 " onClick={() =>{
                router.push("/auth/User/Signin")
            }}>Log in</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full" onClick={() =>{
                router.push("/auth/User/Signup")
            }}>join us</button>
        </div>
    </nav>
    </div>
  
}


export const Usernav = (props:any)=>{

    const router= useRouter();
                return<div className="overflow-visible ">
    <nav className="navbar fixed z-50">
        <i className="  px-4 lg:mx-20 text-black bg-white border py-3 text-center md:w-fit md:ml-80">100xDEVS</i>
        <div className="flex flex-col pl-50 justify-between md:flex-row text-center ">
            <p className="navbar-elements navbar-border"><button onClick={() =>{
                router.push("/user")
            }}>Courses</button></p>
            <p className="navbar-elements navbar-border"><button onClick={() =>{
                router.push("/user/PurchasedCourses")
            }}>my Learnings</button></p>
            <p className="navbar-elements navbar-border"><button >Community</button></p>
            
        </div>
        <div className="right-0 text-center py-1">
            <button className="px-10 md:pt-2 lg:pt-0 hover:bg-white hover:text-black" >{props.name}</button>
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {signOut()}}>Log out</button>
        </div>
    </nav>
    </div>
}





export const Adminnav = (props:any)=>{
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
            <button className="px-10 py-2 hover:bg-white hover:text-black  border rounded-full"  onClick={()=> {signOut()}}>Log out</button>
        </div>
    </nav>
    </div>
}







