import profile from "../../assets/images/profile.png";
// import twitter from "../../assets/icons/twitter.svg";
// import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container bg-primary md:flex justify-between rounded-[30px]">
        <div className="md:flex">
          <div className="m-4 pt-4 md:pt-0">
            <Link to="/">
              <img
                className="w-full h-[250px] overflow-hidden rounded-[24px]  md:w-[80px] md:h-[80px] "
                src={profile}
                alt="profile"
              />
            </Link>
          </div>
          <div className="name-container m-5  md:m-0 flex flex-col justify-center">
            <p className="font-bold text-left md:text-[24px] text-black">
              ELLAIDHURAI N
            </p>
            <div className="font-semibold">
              <p className="text-gray-800">
                Freelancer | Web developer | Mobile app developer{" "}
              </p>
              <p className="text-gray-800  text-sm">
                ellaidhuraidev@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 pb-4 md:pb-0">
          <div className="flex w-4/5 justify-center items-center">
            <p className="bg-green-900 p-2 m-3 md:m-0 rounded-2xl border ">
              Open to Collaborate
            </p>
          </div>
          <div className="icon-container w-1/5  flex justify-center items-center gap-2 md:mr-10">
            <div className="md:p-3 p-2 bg-themeColor rounded-2xl cursor-pointer">
              <Link
                to="https://www.linkedin.com/in/ellaidhurai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} width={20} height={20} alt="twitter" />
              </Link>
            </div>
            {/* <div className="p-3 bg-themeColor rounded-2xl cursor-pointer">
            <img src={instagram} width={20} height={20} alt="twitter" />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
