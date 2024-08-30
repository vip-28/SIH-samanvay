import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const QueryPage = () => {
  const queryItems = useSelector((store) => store.queryData.items);

  const id = useParams();

  const queries = queryItems.map((e, index) => {
    if (id.id == e?.id) {
      let objLen = Object.keys(e).length;
      objLen = objLen - 3;
      objLen = objLen / 3;
        const arr = new Array(objLen).fill(0);

      const other1 = arr.map((f, index) => {
        let index2= index+1;
        return (
          <>
            <div class="pb-2"> Department {index2}: {e[`department${index}`]}</div>
            
            <div class="py-2">Deadline {index2}: {e[`deadline${index}`]}</div>
                <div class="py-2">tenderLetter {index2}: {e[`tenderLetter${index}`].name}</div>
                <br/>
                <br/>
          </>
        );
      });
     
      return (
        <>
          {/* // <div><pre>{JSON.stringify(e,null,2)}</pre></div> */}
          <form class="bg-slate-200 shadow-md rounded px-6 pt-8 pb-8 mb-4 w-3/4 mx-auto">
          <div class="text-lg font-semibold">
            <div>Query Id: {e?.id}</div>
            <div class="h-60 py-3 overflow-y-scroll">Project Details: {e?.details}</div>
            <div class="pt-4">Location: {e?.location}</div>
            {/* <div>{`Department${0}`}: {e[`department${0}`]} </div> */}
            <br />
            <br />

            {other1}
            
          </div>
          </form>
        </>
      );
    }
  });

  return <div>{queries}</div>;
};

export default QueryPage;
