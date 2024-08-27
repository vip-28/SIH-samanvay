import { useState } from "react";
import QueryView from "./queryView";
import ProjectView from "./projectView";
import { Link } from "react-router-dom";

const SideTab = () => {
  const [query, setQuery] = useState(false);
  
  // function handleProject(){
  //   projectChange();
  // }

const changeQuery=()=> {
    setQuery(!query);
    console.log(query);
  }

  function checkQuery() {
    if (query === true) {
      return (
        <div>
          <QueryView changeQuery={changeQuery}  />
        </div>
      );
    }else{
      return(
        <div>

        </div>
      )
    }
  }
  return (
    <>
      <div className="top-64 fixed h-48 w-72 bg-red-700 flex flex-col justify-center items-center gap-5">
      <div className="">
          {" "}<Link to="/newProject">
          <button className="bg-purple-600 p-2 hover:bg-purple-400 active:bg-purple-200" >
            {" "}
            Create Project{" "}
          </button>
          </Link>
        </div>
  
      
        <div className="">
          {" "}
          <button
            className="bg-purple-600 p-2 hover:bg-purple-400 active:bg-purple-200"
            onClick={() => changeQuery()}
          >
            {" "}
            Show Query{" "}
          </button>
        </div>
        <div className="">
          {" "}<Link to="/forums">
          <button className="bg-purple-600 p-2 hover:bg-purple-400 active:bg-purple-200">
            {" "}
            Forums{" "}
          </button>{" "}
          </Link>
        </div>

      
      </div>
      <div>  {checkQuery()}</div>
      <div>{<ProjectView/>}</div> 
    </>
  );
};

export default SideTab;
