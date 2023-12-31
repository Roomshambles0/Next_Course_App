"use client";

import axios from "axios";
import { useState } from "react";
import { userState } from "@/lib/store/atoms/user";
import { useRecoilState,useSetRecoilState } from "recoil";
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react";

export default function Signup(){
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
    return (
        <div className="mx-auto w-full py-52 bg-black  border-white text-white overflow-hidden shadow-md h-full ">
        <div className="p-8">
        <p className="  font-mono font-semibold text-4xl py-5 flex justify-center ">Start your journey with 100xdevs</p>
        <h1 className="text-white font-mono font-semibold text-7xl py-5 flex justify-center px-10">Be.A.100xDEV</h1>
        </div>
        <SignupCard  onClick={ (name,email,password) => {
    axios.post(`/api/register/user`, {
        name: name,
        username: email,
        password: password
    }).then((response)=>{
    signIn('user', { redirect: false, username:email,password:password})
      .then((callback) => {
        if (callback?.error) {
          console.error('Invalid credentials!');
        }
  
        if (callback?.ok) {
          router.push('/user')
        }
      })
    });

   

    // if(responce.data ){
   
 //   }
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
  <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Roronoa zoro"  onChange={(e) => {
    setName(e.target.value);
                    }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Email
  </span>
  <input type="email" name="email" className="my-2 pr-48 pl-2 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"   onChange={(e) => {
    setEmail(e.target.value);
                    }}/>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
    Password
  </span>
  <input type="Password" name="email" className="my-2 px-3 py-2 bg-white text-slate-500  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1"   onChange={(e) => {
    setPassword(e.target.value);
                    }}/>
  <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white" onClick={async() => {
  props.onClick(name,email,password);
}}>Submit</button>
</label>
    </div>
}