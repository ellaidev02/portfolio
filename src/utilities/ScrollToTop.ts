import { animateScroll as scroll } from "react-scroll";

export const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // You can adjust the duration as needed
      smooth: "easeInOutQuart", // You can adjust the easing function
    });
  };