import { Link } from "react-router-dom";
import corpLogo from "../Assets/corpLogo.png";
import anonymous from "../Assets/anonymous.png";

const Header1 = () => {
  return (
    <>
      <div className="flex justify-between items-center pr-6 py-2 bg-gray-300">
        <div className="logo ">
          {" "}
          <Link to="/">
            <img src={corpLogo} alt="img" className="w-32 h-24" />
          </Link>
        </div>

        <div className=" pl-12 text-4xl underline">Samanvay Portal</div>

        <div className="flex items-center gap-2"> 
        <div>Dummy Name</div>   
            <img src={anonymous} alt="img" className="h-14 bg-white rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default Header1;
