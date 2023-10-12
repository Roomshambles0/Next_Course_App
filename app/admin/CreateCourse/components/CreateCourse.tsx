"use client";


import axios from "axios";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import {useState} from "react";



export const CreateCourse = ()=>{
const router = useRouter();
    return(<div className="mx-auto w-full  bg-stone-800   border-white text-white overflow-hidden shadow-md h-full pt-60">
    <div className="p-8">
    <p className="font-mono font-semibold text-4xl py-5 flex justify-center ">Create Courses and start teaching with us </p>
        </div>
    <CreateCard onClick={async (title,description,price,image,publish) => {
    const response = await axios.post(`/api/admin/courses`, {
      title:title,
       description:description,
       price:price,
       imageLink:image,
       published:publish
    });
    alert("course named " + title +" is created")
      router.push("/admin") 
}}></CreateCard>
    </div>)
}




const CreateCard = (props:{
  onClick:(
      title:string,
      description:string,
      price:string,
      image:string,
      publish:string
)  => void
})=>{
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("")
  const [publish,setPusblish] = useState("");
  console.log(image)
    return( <div className="md:shrink-0 flex justify-center h-full w-full bg-black">
        <label className="block border p-5 m-10 rounded-lg">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Title
      </span>
      <input type="Name" name="name" className="my-2 pr-48 pl-2 py-2 bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="Full stack cohort" onChange={(e) => {
    setTitle(e.target.value);
                    }}/>
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Description
      </span>
      <input type="Description" name="description" className="my-2 pr-48 pl-2 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="About course" onChange={(e) => {
    setDescription(e.target.value);
                    }}/>
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Price
      </span>
      <input type="price" name="number" className="my-2 pr-48 pl-2 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="$499" onChange={(e) => {
    setPrice(e.target.value);
                    }}/>
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-100">
        Image Link
      </span>
      <input type="text"  className="my-2 px-3 py-2 bg-white text-black  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none w-full rounded-md sm:text-sm focus:ring-1" placeholder="/zoro.jpg" onChange={(e) => {
    setImage(e.target.value);
                    }}/>
      <div><fieldset>
        <legend className=" block text-sm font-medium text-slate-100 after:content-['*'] after:ml-0.5 after:text-red-500">Published status</legend>
      
        <input id="draft" className="peer/draft" type="radio" name="status" value="false"  onChange={(e) => {
    setPusblish(e.target.value);
                    }}/>
        <label htmlFor="draft" className="peer-checked/draft:text-white text-sm font-medium text-slate-400 pr-2 pl-2" >false</label>
      
        <input id="published" className="peer/published " type="radio" name="status" value="true" onChange={(e) => {
    setPusblish(e.target.value);
                    }}/>
        <label htmlFor="published" className="peer-checked/published:text-white text-sm font-medium text-slate-400 pl-2">true</label>
      
        <div className="hidden peer-checked/draft:block text-md font-medium text-slate-100">Drafts are only visible to administrators.</div>
        <div className="hidden peer-checked/published:block text-md font-medium text-slate-100">Your post will be publicly visible.</div>
      </fieldset></div>
      <button className="border p-2 mt-2 rounded-md font-mono hover:text-black hover:bg-white" onClick={async() => {
  props.onClick(title,description,price,image,publish);
}}>Submit</button>
    </label>
        </div>
    )
}