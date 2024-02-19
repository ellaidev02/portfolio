import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

const HomeAbout = () => {
  return (
    <div className="bg-primary p-3 my-5 rounded-[24px]">
      <p className="text-[30px] p-3 text-black font-semibold">ABOUT ME</p>
      <div className="text-gray-800 ">
      <p className="px-3 font-semibold">
        Greetings! I'm Ellaidhurai N, a dynamic frontend web developer who
        crafts seamless user experiences for 🌏 web and 📱 mobile applications.
        passionate about the ever-evolving landscape of web and mobile
        development, I thrive on bringing ideas to life and creating digital
        solutions that resonate with users.
      </p>

      <p className="px-3  font-semibold pt-5">
        If you're in need of WordPress website development, web application
        development, or mobile app development, Please feel free to reach out to
        me for any inquiries or collaboration opportunities. I look forward to
        discussing how I can contribute to your projects and help achieve your
        goals.
      </p>
      <p className="px-3 font-semibold pt-5">
        Let's connect and explore the possibilities of turning visions into
        reality!
      </p>
      <p className="px-3 font-semibold pt-2">
        ellaidhuraidev@gmail.com
      </p>
      </div>
      <div className="flex justify-center">
        <Link to="/aboutMe" onClick={scrollToTop}>
          <button className=" p-3  mt-6 mb-2 mx-2 text-black bg-gray-300 font-semibold  rounded-xl py-2">
            More about Me{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeAbout;
