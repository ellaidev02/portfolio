import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

const HomeAbout = () => {
  return (
    <div className="bg-primary p-3 my-5 rounded-[24px]">
      <p className="text-[30px] p-3">Hello there!</p>
      <p className="px-3 text-textSecondary font-light">
        Greetings! I'm Ellaidhurai N, a dynamic frontend web developer who
        crafts seamless user experiences for 🌏 web and 📱 mobile applications.
        passionate about the ever-evolving landscape of web and mobile
        development, I thrive on bringing ideas to life and creating digital
        solutions that resonate with users.
      </p>

      <p className="px-3 text-textSecondary font-light pt-5">
        If you're in need of WordPress website development, web
        application development, or mobile app development, Please feel free to reach out to me for any inquiries or
        collaboration opportunities. I look forward to discussing how I can
        contribute to your projects and help achieve your goals.
      </p>
      <p className="px-3 text-textSecondary font-light pt-5">
        Let's connect and explore the possibilities of turning visions into
        reality!
      </p>
      <p className="px-3 text-themeColor font-light pt-2">
        ellaidhuraidev@gmail.com
      </p>
      <Link to="/aboutMe" onClick={scrollToTop}>
        <button className="bg-secondary w-[800px]  mt-6 mb-2 mx-2 text-themeColor  rounded-xl py-2">
          More about Me{" "}
        </button>
      </Link>
    </div>
  );
};

export default HomeAbout;
