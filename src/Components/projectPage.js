import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectPage= ()=>{

const projectItems= useSelector((store)=>store.projectData.items);
console.log(projectItems);

    const id= useParams();
    console.log(id.id);


    const projects = projectItems.map((e, index)=>{
        if(id.id==e?.id){
       
        return (
            <>
           {     console.log(Object.keys(e).length)}
           <form class="bg-slate-200 shadow-md rounded px-6 pt-8 pb-8 mb-4 max-w-md mx-auto">
            <div class="text-lg font-semibold">
            <div>ID = {e?.id} </div>
            <div class="py-3"> Department : {e?.department}</div>
            <div class="h-60 py-3 overflow-y-scroll">Project Details : {e?.details} <br></br></div>
            <div class=" py-3 pt-4">Start Date : {e?.startDate}</div>
            <div class=" py-3 pt-4">End Date : {e?.endDate}</div>
            <div class="py-4">Location : {e?.location}</div>
            <div class="py-4">Agency : {e?.agency}</div>
            </div>
            </form>
            
            </>
        )
    }
      })

    return(
        <>
        <div>{projects}</div>
        </>
    )
}

export default ProjectPage;