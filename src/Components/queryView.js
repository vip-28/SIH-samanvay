import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QueryView = (props) => {
  const queryItems = useSelector((store) => store.queryData.items);
  const queries = queryItems.map((e, index) => {
    return (
      <>
        <Link to={`/query/${e?.id}`}>
        <div className="flex">
            <div>Sno. {e?.id}</div>
            <div>Project Details: {e?.details}</div>
            <div>Location {e?.location}</div>

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
    <div className=" top-44 left-80 absolute h-96 w-3/4 bg-blue-600 z-10"><div>{queries}</div></div>
    </div>
    <div className="h-7 w-7 bg-slate-400 relative top-6 z-30 left-[1455px] rounded-full flex items-center justify-center" ><button onClick={props.changeQuery}> X </button></div>
    </div>
    </>    
    );
};

export default QueryView;
