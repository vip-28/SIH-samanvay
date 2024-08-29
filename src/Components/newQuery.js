import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/queryDataSlice";

const NewQuery = () => {
  const [count, setCount] = useState(1);

  const handleAddclick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  let a =Math.floor(Math.random()*10000000+100000000)
function idGen(){
  a =Math.floor(Math.random()*10000000+100000000);
}

  let formDataObj;
    const handleForm = (event) => {
      event.preventDefault();
      let form= event.target;
      let formData= new FormData(form);
      formDataObj= Object.fromEntries(formData.entries());
      let formJSON= JSON.stringify(formDataObj);
      console.log(formDataObj);
      // console.log(formJSON);
      handleAddQuery();
    };

    const dispatch=useDispatch();
    const handleAddQuery=()=>{
      let a =Math.floor(Math.random()*10000000+100000000)
      formDataObj.id=a;
      console.log(formDataObj);
      dispatch(addItem(formDataObj));

    }


  return (
    <>
   
  
      <div>NEW QUERY</div>
      <form onSubmit={handleForm}>
        <label>
        <div>Query Creation ID: {a}</div>
        </label>
        <label>
          <div>
            Location: <input name="location" className="border-2 border-solid border-black" type="text"></input>
          </div>
        </label>
        <label>
          <div>Project Details:</div>
          <textarea
          name="details"
            cols={125}
            rows={5}
            className="border-2 border-solid border-black"
          ></textarea>
        </label>
        <div>
          <button
            className="bg-red-400 mr-5 p-2"
            type="button"
            onClick={(e) => {
              handleAddclick(e);
            }}
          >
            Add Department
          </button>
        </div>
        <label className="">
          {Array.from(Array(count)).map((c, index) => {
            return (
              <div className="border-2 m-3 border-solid border-black p-2 text-center" key={index}>
                <div>
                  <select
                    className="border-2 border-solid border-black"
                    name={`department${index}`}
                  >
                    <option value="Select Department">Select Department</option>
                    <option value="Telecommunication">
                      Telecommunication{" "}
                    </option>
                    <option value="Water Department">Water Department</option>
                    <option value="Road Department">Road Department</option>
                    <option value="Education Department">
                      Education Department
                    </option>
                    <option value="Public Works Department">
                      Public Works Department
                    </option>
                    <option value="Law Enforcing Department">
                      Law Enforcing Department
                    </option>
                  </select>
                </div>
                <div classname="">
                  <label>
                    Official Letter :
                    <input
                      className="p-2"
                      name={`tenderLetter${index}`}
                      type="file"
                      id="myFile"
                    />
                  </label>
                </div>
                <div className="">
                  Expected Answers By: <input name={`deadline${index}`} className="border-2 border-black p-0" type="date"></input>
                </div>
              </div>
            );
          })}
        </label>
        <label>
          <div className="text-center">
          <input className="border-2 border-black border-solid " onSubmit={idGen()} type="submit"></input>
          </div>
        </label>
      </form>
    </>
  );
};

export default NewQuery;
