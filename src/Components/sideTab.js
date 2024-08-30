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
    
      <div className="top-36 fixed h-full w-72 bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-5 text-white ">
        <div className="  absolute top-20">
          


          
          <div className=" m-5">
            {" "}
            <Link to="/newProject">
              <button className="bg-indigo-600 p-2 hover:bg-indigo-400 active:bg-indigo-200 rounded-lg">
                {" "}
                Create Project{" "}
              </button>
            </Link>
          </div>

          <div className=" m-5">
            {" "}
            <button
              className="bg-indigo-600 p-2 hover:bg-indigo-400 active:bg-indigo-200 rounded-lg"
              onClick={() => changeQuery()}
            >
              {" "}
              Show Query{" "}
            </button>
          </div>
          
          <div className=" m-5">
            {" "}
            <Link to="/newQuery">
              <button className="bg-indigo-600 p-2 hover:bg-indigo-400 active:bg-indigo-200 rounded-lg">
                {" "}
                Create Query{" "}
              </button>{" "}
            </Link>
          </div>
          <div className=" m-5">
            {" "}
            <Link to="/updateQuery">
              <button className="bg-orange-600 p-2 hover:bg-orange-400 active:bg-orange-200 rounded-lg">
                {" "}
                Update Query{" "}
              </button>{" "}
            </Link>
          </div>
          <div className=" m-5">
            {" "}
            <Link to="/forums">
              <button className="bg-orange-600 p-2 hover:bg-orange-400 active:bg-orange-200 rounded-lg">
                {" "}
                Forums{" "}
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
