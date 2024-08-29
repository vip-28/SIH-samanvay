import { Link } from "react-router-dom";
import corpLogo from "../Assets/corpLogo.png";
import anonymous from "../Assets/anonymous.png";

const Header1 = () => {
  return (
    <>
      <div className="flex justify-between items-center pr-6 py-2 bg-green-200 font-semibold ">
        <div className="logo ">
          {" "}
          <div className="flex">
            <img src={corpLogo} alt="img" className="w-32 h-24 md:w-32 h-25 lg:w-48 h-45" />
       
            </div>
         
        </div>

        <div className=" pl-12 text-4xl font-customFont text-indigo-700">Samanvay Portal</div>

        <div className="flex items-center gap-2"> 
        <div class="font-sans font-medium">User x</div>   
            <img src={anonymous} alt="img" className="h-14 md:h-18 lg:h-22 bg-white rounded-full"/>
        </div>
      </div>
      <div className="h-8 w-full bg-red-200  z-40">
      <div > <Link to="/"> <button className=" ml-[90px] rounded-lg px-3 py-1 bg-blue-600 text-white hover:bg-indigo-400 active:bg-indigo-200"> Home </button></Link></div>
      </div>
    </>
  );
};

export default Header1;
