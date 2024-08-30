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
   
  
      <div class="bg-white text-indigo-600 font-sans shadow-md rounded px-4 pt-6 pb-6 mx-auto w-3/4 text-lg font-semibold">Create a New Query</div>
      <form onSubmit={handleForm} class="bg-white shadow-md rounded px-4 pt-6 pb-8 mx-auto w-3/4 text-lg font-semibold">
        <label>
        <div>Query Creation ID: {a}</div>
        </label>
        <label>
          <div className="flex items-center">
          <div>Type of Query</div>
          <select className="border-2 border-solid border-black m-1" name="queryType">
          <option value="Select Type of Query">Select Type of Query</option>
          <option value="Project Based">Project Based</option>
                    <option value="Resources Based">Resources Based</option>
                    <option value="Awareness Based">Awareness Based</option>
          </select>
          </div>
        </label>
        <label>
          <div>
            Location: <input name="location" className="rounded-md border-2 border-solid border-black" type="text"></input>
          </div>
        </label>
        <label>
          <div>Project Details:</div>
          <textarea
          name="details"
            cols={119}
            rows={5}
            className="resize-none rounded-md ml-2 border-2 border-solid border-black"
          ></textarea>
        </label>
        <div>
          <button
            className="cursor-pointer w-44 rounded-full ml-10 mt-3 pt-2 py-3 px-4 text-white font-semibold bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-400"
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
            let index2= index+1;
            return (
              <div className="rounded-md border-2 m-3 border-solid border-black p-2 " key={index}>
                <div class="text-center">Department {index2}</div>
                <br/>
                
                <div> Select Department: 
                  <select
                    className="rounded-md border-2 border-solid border-black"
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
                <div classname="rounded-md">
                  <label>
                    Official Letter :
                    <input
                      className="mt-1 p-2 rounded-md"
                      name={`tenderLetter${index}`}
                      type="file"
                      id="myFile"
                    />
                  </label>
                </div>
                <div className="">
                  Expected Answers By: <input name={`deadline${index}`} className="rounded-md border-2 border-black p-0" type="date"></input>
                </div>
              </div>
            );
          })}
        </label>
        <label>
          <div className="text-center">
          <input className="cursor-pointer w-44 rounded-full ml-16 mt-3 pt-2 py-3 px-4 text-white font-semibold bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-400" onSubmit={idGen()} type="submit"></input>
          </div>
        </label>
      </form>
    </>
  );
};

export default NewQuery;
