import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const QueryPage = () => {
  const queryItems = useSelector((store) => store.queryData.items);

  const id = useParams();

  const queries = queryItems.map((e, index) => {
    if (id.id == e?.id) {
      let objLen = Object.keys(e).length;
      objLen = objLen - 4;
      objLen = objLen / 3;
        const arr = new Array(objLen).fill(0);

      const other1 = arr.map((f, index) => {
        return (
          <>
            <div> Department {index}: {e[`department${index}`]}</div>

            <div>Deadline {index}: {e[`deadline${index}`]}</div>
                <div>tenderLetter {index}: {e[`tenderLetter${index}`].name}</div>
                <br/>
                <br/>
          </>
        );
      });
     
      return (
        <>
          {/* // <div><pre>{JSON.stringify(e,null,2)}</pre></div> */}
          <div>
            <div>Query Id: {e?.id}</div>
            <div>Query Type: {e?.queryType}</div>
            <div>Project Details: {e?.details}</div>
            <div>Location: {e?.location}</div>
            
            {/* <div>{`Department${0}`}: {e[`department${0}`]} </div> */}
            <br />
            <br />

            {other1}
            
          </div>
        </>
      );
    }
  });

  return <div>{queries}</div>;
};

export default QueryPage;
