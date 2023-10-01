import Image from "next/image"



export default function TestimonialCard(props:any){
    return(
    <div className="mx-auto w-full  bg-stone-900 border-solid border-2 border-white rounded-lg text-white ">
    <div className="md:shrink flex h-44 justify-center">
    <Image className=" object-cover object-center py-5 h-48 w-48 rounded-full"    width={500}
      height={500} src={props.img} alt="" />
    </div>
    <div className="p-8"> 
    <p className="flex justify-center text-xl font-semibold">{props.p}</p>
    <h1 className="flex justify-center pt-20 font-bold text-4xl border-b w-60 pb-3">{props.name}</h1>
    <p className="font-mono text-base py-2">{props.id}</p>
    </div>
    </div>
    )
}