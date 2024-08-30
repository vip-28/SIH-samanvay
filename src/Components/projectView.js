import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectView = () => {
  const projectItems = useSelector((store) => store.projectData.items);
  console.log(projectItems);


  const projects = projectItems.map((e, index)=>{
    
    return (
        <>
       <Link to={`/project/${e?.id}`}>
        <div className="grid grid-cols-[5%,15%,30%,20%,10%,10%,10%]  border-solid border-b-2 border-black">
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center"> {e?.id} &nbsp;&nbsp;</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">  {e?.department}</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center ">{e?.details}</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.startDate}</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.endDate}</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.location}</div>
        <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.agency}</div>
        </div>
        </Link>
        </>
    )
  })


  return (
    <>
      <div className=" top-48 left-80 absolute h-[400px] w-3/4 bg-slate-200 rounded-t-lg overflow-auto auto-flex border-[0.5px] border-black ">
      <div class="text-center font-sans font-bold text-indigo-600 pt-2 pb-2">Ongoing Projects</div>
      <div className="grid grid-cols-[5%,15%,30%,20%,10%,10%,10%]  border-solid border-y-2 border-b-2 border-black overflow-auto">
      <div className="border-r-2 pl-2 border-solid border-black"> S.No. </div>
        <div className="border-r-2 pl-2 border-solid border-black"> Department </div>
        <div className="border-r-2 pl-2 border-solid border-black  ">Project Details</div>
        <div className="border-r-2 pl-2 border-solid border-black">Location</div>
        <div className="border-r-2 pl-2 border-solid border-black">Start Date</div>
        <div className="border-r-2 pl-2 border-solid border-black">End Date</div>
        
        <div className="border-r-2 pl-2 border-solid border-black">Agency</div>
        
        </div>
        <div>{projects } </div>
    </div>
    </>
  );
};

export default ProjectView;