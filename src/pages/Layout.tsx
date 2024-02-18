import { ReactNode } from "react";
import Footer from "../components/common/Footer";
import { LetsTalk } from "../components/common/LetsTalk";
import NavMenu from "../components/common/NavMenu";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

interface LayoutProps {
  children: ReactNode;
  isContact?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isContact }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // You can adjust the duration as needed
      smooth: "easeInOutQuart", // You can adjust the easing function
    });
  };

  return (
    <div>
      {children}
      {!isContact && (
        <div className="cursor-pointer">
          <Link to="/contact" onClick={scrollToTop}>
            <LetsTalk />
          </Link>
        </div>
      )}
      <Footer />
      <div className="mt-5 flex justify-center items-center fixed bottom-5 md:left-[500px]">
        <NavMenu />
      </div>
    </div>
  );
};

export default Layout;
