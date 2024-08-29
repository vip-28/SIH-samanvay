import { useState } from "react"


const NewQuery= ()=>{

const [count,setCount]= useState(0);

  
const handleAddclick= (e)=>{
  e.preventDefault();
setCount(count+1);
}

    return(
        <>
        <div>NEW QUERY</div>
        <form >
        <label>
          Select Concerned Department:
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
       
        <button type="button" onClick={(e)=>{handleAddclick(e)}}>Add Department</button>
        <label>
        {Array.from(Array(count)).map((c, index) => {
        return (  <select name="department" className="">
          <option value="Select Department">Select Department</option>
          <option value="Telecommunication">Telecommunication </option>
          <option value="Water Department">Water Department</option>
          <option value="Road Department">Road Department</option>
          <option value="Education Department">Education Department</option>
          <option value="Public Works Department">Public Works Department</option>
          <option value="Law Enforcing Department">Law Enforcing Department</option>
        </select>);
      })}
        </label>
        </form>
        </>
    )
}

export default NewQuery;