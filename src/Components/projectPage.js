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
            <div className=" gap-10 p-10">
            <div>Id= {e?.id} </div>
            <div> department : {e?.department}</div>
            <div>Project Details: {e?.details}</div>
            <div>Start Date: {e?.startDate}</div>
            <div>End Date: {e?.endDate}</div>
            <div>Location:{e?.location}</div>
            <div>Agency: {e?.agency}</div>
            </div>
            
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