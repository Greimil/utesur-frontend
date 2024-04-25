import { Link } from "react-router-dom";
import FBlogo from "../../../assets/Footer/facebook.png";
import IGlogo from "../../../assets/Footer/instagram.png";
import YTlogo from "../../../assets/Footer/youtube.png";

export const SocialLinks = () => {
  return (
    <div className=" flex  justify-center gap-x-4 md:justify-between lg:max-h-[250px] col-span-full py-3  ">
     
      <Link to="https://www.facebook.com/profile.php?id=100078139876813" className="[font-size:_clamp(10px,2vw,16px)] flex gap-x-2 ">
        <img  src={FBlogo}  alt="Facebook Logo" className="w-6" />{" "}
        <strong className="hidden md:inline hover:text-white" >Facebook</strong>
      </Link>
      <Link to="https://www.instagram.com/utesur.oficial/" className="[font-size:_clamp(10px,2vw,16px)] flex gap-x-2 ">
        <img  src={IGlogo} alt="Instagram Logo" className="w-6 " />{" "}
        <span className="hidden md:inline hover:text-white" >Instagram</span>
      </Link>
      <Link to="https://www.youtube.com/@utesuroficial3346" className="[font-size:_clamp(10px,2vw,16px)] flex gap-x-2 ">
        <img  src={YTlogo} alt="YouTube Logo" className="w-6" />{" "}
        <span className="hidden md:inline hover:text-white" >YouTube</span>
      </Link>
    </div>
  );
};
