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
  formDataObj.id=count;
  count++;
  console.log(formDataObj);
    dispatch(addItem(formDataObj))
}


  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Select Department:
          <select name="department" className="">
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
        <label className=" ">
          Project Details:
          <br />
          <textarea name="details" className="h-20"></textarea>
        </label>
        <br />
        <label className="">
          Project Location:
          <input name="location" type="text" />
        </label>
        <br />
        <label>
          Tentative Starting Date:
          <input name="startDate" type="date"></input>
        </label>
        <br />
        <label>
          Tentative Completion Date:
          <input name="endDate" type="date"></input>
        </label>
        <br />
        <label>
          Tendered Agency(if any):
          <input name="agency" type="text"></input>
        </label>
        <br />
        <label>
          Official allotment of Tender :
          <input name="tenderLetter" type="file" id="myFile" />
        </label>
        <br />
        <input name="submit" type="submit" />
      </form>
    </>
  );
};

export default NewProject;
