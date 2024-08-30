import { Form } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/projectDataSlice";

const NewProject = () => {
let formDataObj;
let count=0;
  const handleForm = (event) => {
    event.preventDefault();
    let form= event.target;
    let formData= new FormData(form);
    formDataObj= Object.fromEntries(formData.entries());
    let formJSON= JSON.stringify(formDataObj);
    // console.log(formDataObj);
    // console.log(formJSON);
    handleAddProject();
  };

const dispatch = useDispatch();
const handleAddProject=()=>{
    console.log(formDataObj);
  formDataObj.id=Math.floor(Math.random()*100000);
  count++;
  console.log(formDataObj);
    dispatch(addItem(formDataObj))
}


  return (
    <>
      <form onSubmit={handleForm} class="bg-white shadow-md rounded px-4 pt-6 pb-8 mx-auto w-3/4 text-lg font-semibold ">
        <label>
          Select Department:
          <select name="department" className="mt-1 p-2 block w-full rounded-md border outline-none border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600">
            <option value="Select Department">Select Department</option>
            <option value="Telecommunication">Telecommunication </option>
            <option value="Water Department">Water Department</option>
            <option value="Road Department">Road Department</option>
            <option value="Education Department">Education Department</option>
            <option value="Public Works Department">Public Works Department</option>
            <option value="Law Enforcing Department">Law Enforcing Department</option>
          </select>
        </label>
        <br />
        <label className="">
          Project Details :
          <br />
          <textarea cols={125} name="details" className="resize-none rounded-md box-border h-20 w-full p-2 border-solid border-2 border-black"></textarea>
        </label>
        <br />
        <label className="">
          Project Location : 
          <input name="location" type="text" class="rounded-md box-border h-6 w-40 p-2 border-2 border-solid border-black" />
        </label>
        <br />
        <label>
          Tentative Starting Date :
          <input name="startDate" type="date" class="rounded-md box-border border-2 border-black mt-2"></input>
        </label>
        <br />
        <label>
          Tentative Completion Date :
          <input name="endDate" type="date" class="rounded-md box-border border-2 border-black mt-2"></input>
        </label>
        <br />
        <label>
          Tendered Agency(if any) :
          <input name="agency" type="text" class="rounded-md box-border-solid border-black border-2 h-6 mt-2 mb-2"></input>
        </label>
        <br />
        <label>
          Official allotment of Tender :
          <input name="tenderLetter" type="file" id="myFile" />
        </label>
        <br />
        <input name="submit" type="submit" class="cursor-pointer w-80 rounded-full ml-96 mt-3 pt-2 py-3 px-4 text-white font-semibold bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-400"/>
      </form>
    </>
  );
};

export default NewProject;
