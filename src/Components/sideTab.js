import { useState } from "react";
import QueryView from "./queryView";
import ProjectView from "./projectView";
import { Link } from "react-router-dom";

const SideTab = () => {
  const [query, setQuery] = useState(false);

  // function handleProject(){
  //   projectChange();
  // }

  const changeQuery = () => {
    setQuery(!query);
    console.log(query);
  };

  function checkQuery() {
    if (query === true) {
      return (
        <div>
          <QueryView changeQuery={changeQuery} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  return (
    <>
    
      <div className="top-28 fixed h-full w-72 bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-5 ">
        <div className="  absolute top-32">
          


          
          <div className=" m-5">
            {" "}
            <Link to="/newProject">
              <button className="bg-blue-600 p-2 hover:bg-blue-400 active:bg-blue-300 rounded-lg">
                {" "}
                Create Project{" "}
              </button>
            </Link>
          </div>

          <div className=" m-5">
            {" "}
            <button
              className="bg-blue-600 p-2 hover:bg-blue-400 active:bg-blue-300 rounded-lg"
              onClick={() => changeQuery()}
            >
              {" "}
              Show Query{" "}
            </button>
          </div>
          <div className=" m-5">
            {" "}
            <Link to="/forums">
              <button className="bg-blue-600 p-2 hover:bg-blue-400 active:bg-blue-300 rounded-lg">
                {" "}
                Forums{" "}
              </button>{" "}
            </Link>
          </div>
          <div className=" m-5">
            {" "}
            <Link to="/newQuery">
              <button className="bg-blue-600 p-2 hover:bg-blue-400 active:bg-blue-300 rounded-lg">
                {" "}
                Create Query{" "}
              </button>{" "}
            </Link>
          </div>
          <div className=" m-5">
            {" "}
            <Link to="/updateQuery">
              <button className="bg-blue-600 p-2 hover:bg-blue-400 active:bg-blue-300 rounded-lg">
                {" "}
                Update Query{" "}
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div> {checkQuery()}</div>
      <div>{<ProjectView />}</div>
    </>
  );
};

export default SideTab;
