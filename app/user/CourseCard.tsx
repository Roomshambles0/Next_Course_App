export const CourseCard = (props:any) =>{
    return <div>
    <div className="mx-auto w-full  bg-black border-solid border-2 border-white rounded-lg text-white overflow-hidden shadow-md  ">
    <div className="md:shrink-0 flex h-full ">
    <img className=" object-cover rounded h-full w-full" src={props.img} alt="" />
    </div>
    <div className="p-8">
    <h1 className="text-5xl font-bold pb-5">{props.Cname}</h1>
    <p className="text-stone-400 text-left ...">{props.desc}</p>
    <p className="pt-2 font-extrabold text-lg ">{props.price}</p>
    </div>
    <button className="mx-8 mb-5 p-2 border rounded-lg font-semibold font-mono hover:bg-white hover:text-black" onClick={()=>{alert("course " + props.Cname +" purchased" ) }}>Purchase</button>
    </div>
    </div>
    }