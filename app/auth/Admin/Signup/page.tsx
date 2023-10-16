"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Adminsignup(){
const router = useRouter();
    return (
        <div className="mx-auto w-full  bg-stone-800  border-white text-white overflow-hidden shadow-md h-full pt-48">
        <div className="p-5">
        <p className="  font-mono font-semibold text-4xl pt-5 flex justify-center ">Start Creating your courses</p>
        <h1 className="text-white font-mono font-semibold text-7xl pt-5 flex justify-center lg:px-10">Join us as teachers</h1>
        </div>
        <SignupCard  onClick={async (name,email,password) => {
    axios.post(`/api/register/admin`, {
      name: name,
      username: email,
      password: password
  }).then((response)=>{
    signIn('admin', { redirect: false, username:email,password:password})
      .then((callback) => {
        if (callback?.error) {
          console.error('Invalid credentials!');
        }
  
        if (callback?.ok) {
          router.push('/admin')
        }
      })

  });

  
    // if(res.data){
    //   
    // }
   
}}></SignupCard>
        </div>
    )
}




function SignupCard(props:{
  onClick:(
      name:string,
      username:string,
      password:string
)  => void
}){
  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");
  const [password,setPassword] = useState("");
    return <div className="md:shrink-0 flex justify-center h-full w-full ">
    <label className="block border p-5 m-10 rounded-lg">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Name
  </span>
  <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Roronoa zoro" onChange={(e) => {
    setName(e.target.value);
                    }}/>
  
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
  props.onClick(name,email,password);
}}>Signup</button>
<p className=" flex justify-center font-mono font-semibold  border-t my-4 w-full">Already have an account? <Link href="/auth/Admin/Signin">Log in</Link></p>
</label>
    </div>
}