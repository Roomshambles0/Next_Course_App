"use client";
import {BsGoogle} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { adminState } from "@/lib/store/atoms/admin";
import { useRecoilState,useSetRecoilState } from "recoil";
import Link from "next/link";


export default function Adminsignup(){
  const router = useRouter();
  const setAdmin = useSetRecoilState(adminState);
    return (
        <div className="mx-auto w-full  bg-stone-800  border-white text-white overflow-hidden shadow-md h-full pt-48">
        <div className="p-5">
        <p className="  font-mono font-semibold text-4xl pt-5 flex justify-center ">Start Creating your courses</p>
        <h1 className="text-white font-mono font-semibold text-7xl pt-5 flex justify-center lg:px-10">Join us as teachers</h1>
        </div>
        <SignupCard  onClick={async (email,password) => {
    const res = await axios.post(`http://localhost:3001/admin/signup`, {
        username: email,
        password: password
    }, {
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = res.data;
    setAdmin({
      isLoading:false,
      userEmail:email
    })
    localStorage.setItem("token", data.token);
    // window.location = "/"
    if(data){
    router.push("/admin/courses")}
}}></SignupCard>
        </div>
    )
}




function SignupCard(props:{
  onClick:(
      username:string,
      password:string
)  => void
}){
  const [email ,setEmail] = useState("");
  const [password,setPassword] = useState("");
    return <div className="md:shrink-0 flex justify-center h-full w-full ">
    <label className="block border p-5 m-10 rounded-lg">
        <div className="p-5  flex flex-col justify-center border-b  w-full ">
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGoogle size={30} className="mx-2"/><p className="px-2">Continue with Google</p></div></button>
        <button><div className="border py-5 px-5 my-2 flex rounded-lg font-mono font-semibold hover:text-black hover:bg-white"><BsGithub size={30} className="mx-2"/><p className="px-2">Continue with Gitub</p></div></button>
        </div>
        <p className=" flex justify-center font-mono font-semibold ">or register with email here</p>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Name
  </span>
  <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Roronoa zoro" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Mobile
  </span>
  <input type="phone number" name="number" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="+91 1223456798" />
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Email
  </span>
  <input type="email" name="email" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" onChange={(e) => {
    setEmail(e.target.value);
                    }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Password
  </span>
  <input type="Password" name="email" className="my-2 px-3 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" onChange={(e) => {
    setPassword(e.target.value);
                    }}/>
  <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white" onClick={async() => {
  props.onClick(email,password);
}}>Signup</button>
<p className=" flex justify-center font-mono font-semibold  border-t my-4 w-full">Already have an account? <Link href="/admin/signin">Log in</Link></p>
</label>
    </div>
}