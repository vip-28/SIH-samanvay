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
            <Link to="/">
            <img src={corpLogo} alt="img" className="w-32 h-24 md:w-32 h-25 lg:w-40 h-45" />
            </Link>
            </div>
         
        </div>

        <div className=" pl-12 text-4xl font-customFont text-indigo-700">Samanvay Portal</div>

        <div className="flex items-center gap-2"> 
        <div class="font-sans font-medium">User x</div>   
            <img src={anonymous} alt="img" className="h-14 md:h-18 lg:h-22 bg-white rounded-full"/>
        </div>
      </div>
      <div className="h-8 w-full bg-red-200  z-40">
      <div class="inline-flex"> 
        
        <Link to="/"> <button className="ml-[90px] rounded-l-lg z-50 px-3 py-1 bg-indigo-600 text-white hover:bg-indigo-400 active:bg-indigo-200  h-8"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
        </button></Link>
        <Link to="/"> <button className="h-8 mt-0 text-white rounded-r-lg pt-1 pb-3 px-3 pl-0 font-semibold bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-200">Home</button></Link>
      </div>
      </div>
    </>
  );
};

export default Header1;
