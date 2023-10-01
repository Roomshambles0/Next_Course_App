
import {FcGoogle} from "react-icons/fc"
import {FaAmazon} from "react-icons/fa6"
import {SiNetflix} from "react-icons/si"
import {FaMicrosoft} from "react-icons/fa6"
import {FaMeta} from "react-icons/fa6"


export default function Companies(){
    
    return <>
    <div className="bg-black text-white">
        <div className="flex justify-center font-mono font-semibold text-3xl  ">
           <h1 className=" font-mono font-semibold text-5xl py-4 lg:pr-28"> Our Students Work at</h1>
        </div>
    <div className="grid grid-cols-5 gap-5 lg:pl-48  md:pl-28 py-10">
        <i><FcGoogle size={70}/></i>
        <i className="text-white"><FaAmazon size={70}/></i>
        <i className="text-white"><FaMicrosoft size={70}/></i>
        <i className="text-rose-900"><SiNetflix size={70}/></i>
        <i className="text-blue-800"><FaMeta size={70}/></i>
    </div>
    </div>
    </>
}