import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectView = () => {
  const projectItems = useSelector((store) => store.projectData.items);
  console.log(projectItems);


  const projects = projectItems.map((e, index)=>{
    
    return (
        <>
       <Link to={`/project/${e?.id}`}>
        <div className="flex justify-center">
        <div>S No. {e?.id} &nbsp;&nbsp;</div>
        <div> department : {e?.department}</div>
        <div>Project Details: {e?.details}</div>
        <div>Start Date: {e?.startDate}</div>
        <div>End Date: {e?.endDate}</div>
        <div>Location:{e?.location}</div>
        <div>Agency: {e?.agency}</div>
        </div>
        </Link>
        </>
    )
  })


  return (
    <>
      <div className=" top-48 left-80 absolute h-[400px] w-3/4 bg-slate-200 rounded-t-lg overflow-auto flex  ">
        <div>{projects } </div>
    </div>
    </>
  );
};

export default ProjectView;
