
import { Link } from "react-router-dom";
import { menuList } from "../../constants/NavMenu";
import { scrollToTop } from "../../utilities/ScrollToTop";

const NavMenu = () => {

  return (
    <div className=" bg-glassEffect bg-opacity-70  backdrop-blur-sm flex justify-center items-center rounded-[24px] w-[350px] mt-5">
      <div className="flex gap-4 justify-center items-center">
        {menuList.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={scrollToTop}
            className="bg-themeColor p-3 my-5 rounded-[24px] cursor-pointer"
          >
            <img src={item.icon} width={20} height={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
