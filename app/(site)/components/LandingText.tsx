
import { LiaYoutube, LiaDiscord } from "react-icons/lia";
import {FaGreaterThan} from "react-icons/Fa"
export default function LandingText(){

    return <>
  
    <main className="text-white w-full pb-60 pt-20 bg-black shrink mx-auto " >
        <div className="flex flex-col py-80 ">
        <h1 className="text-center border-solid  text-8xl font-semibold font-sans object-scale-down  ">100xDEVS</h1>
        <p className="text-center  font-mono text-xl">Empowering Tomorrow's Innovators: Crafting Full-Stack Futures through Open Source Excellence with 100xDevs!</p>
        <div className="flex justify-center">
        <div className="py-2 my-2 flex justify-center border rounded-full w-40 font-bold font-sans font-xl hover:bg-white hover:text-black "> <button className="px-2 mx-2 ">join us</button><button className="py-2"><FaGreaterThan size={20}/></button></div>
       <button className="px-2 font-xl border rounded-full mx-5 my-2 hover:bg-white hover:text-black"> <LiaDiscord size={50} /> </button>
       <button className="px-2 font-xl border rounded-full  my-2 hover:bg-white hover:text-black"> <LiaYoutube size={50} /> </button>
        </div>
        </div>
    </main>

    </>
}