import profile from "../../assets/images/profile.png";
// import twitter from "../../assets/icons/twitter.svg";
// import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container bg-primary flex justify-between rounded-[30px]">
        <div className="flex">
          <div className="rounded-[24px] m-4 overflow-hidden">
            <Link to="/">
              <img width={80} height={80} src={profile} alt="profile" />
            </Link>
          </div>
          <div className="name-container flex flex-col justify-center">
            <p className="font-semibold text-left text-[24px] text-gray-200">
              ELLAIDHURAI N
            </p>

            <p className="text-textSecondary">Freelancer | Web developer | Mobile app developer </p>
            <p className="text-textSecondary text-sm">ellaidhuraidev@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="bg-green-900 p-2 rounded-2xl border ">Open to work</p>
        </div>
        <div className="icon-container flex justify-center items-center gap-2 mr-10">
          <div className="p-3 bg-themeColor rounded-2xl cursor-pointer">
            <Link to="https://www.linkedin.com/in/ellaidhurai/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width={20} height={20} alt="twitter" />
            </Link>
          </div>
          {/* <div className="p-3 bg-themeColor rounded-2xl cursor-pointer">
            <img src={instagram} width={20} height={20} alt="twitter" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
