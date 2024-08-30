import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QueryView = (props) => {
  const queryItems = useSelector((store) => store.queryData.items);
  const queries = queryItems.map((e, index) => {
    return (
      <>
        <Link to={`/query/${e?.id}`}>
          <div className="grid grid-cols-[10%,20%,55%,15%]  border-solid  border-l-2 border-b-2 border-black overflow-auto">
            <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center"> {e?.id}</div>
            <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.queryType}</div>
            <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center"> {e?.details}</div>
            <div className="overflow-hidden border-r-2 border-solid border-black h-16 flex justify-center items-center">{e?.location}</div>
          </div>
        </Link>
      </>
    );
  });

  console.log(props);
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className=" top-44 left-80 absolute h-96 w-3/4 bg-slate-200 z-10 ">
          <div className="grid grid-cols-[10%,20%,55%,15%]  rounded-md border-solid border-y-2 border-black overflow-auto">
      <div className="border-r-2 border-l-2 pl-2 border-solid border-black"> S No. </div>
        <div className="border-r-2 pl-2 border-solid border-black"> Type of Query </div>
        <div className="border-r-2 pl-2 border-solid border-black  ">Project Details</div>
        <div className="border-r-2 pl-2 border-solid border-black  ">Location</div>


        
        
        </div>
            <div>{queries}</div>
          </div>
        </div>
        <div className="h-7 w-7 bg-slate-400 relative top-6 z-30 left-[1455px] rounded-full flex items-center justify-center">
          <button onClick={props.changeQuery}> X </button>
        </div>
      </div>
    </>
  );
};

export default QueryView;