import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

interface StackProps {
  stack: {
    logo?: string;
    title: string;
    subTitle: string;
    description: string;
  }[];
  isFullStack: boolean;
}

const Stack: React.FC<StackProps> = ({ stack, isFullStack }) => {
  return (
    <div className=" bg-primary rounded-[24px]">
      <p className="pt-3 pl-6">Stacks</p>
      {stack?.map((data, index) => (
        <div key={index} className="flex flex-wrap gap-4">
          <div className="flex ml-5 mt-5">
            <div className="bg-secondary flex justify-center items-center rounded-[24px] py-4 px-3 mr-3">
              <img src={data.logo} width={40} height={40} />
            </div>
            <div>
              <p>{data.title}</p>
              <p className="text-textSecondary">{data.subTitle}</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-[6px] ml-12 h-[100px] bg-secondary"></div>
            <p className=" pb-4 ml-12 font-light text-textSecondary">
              {data.description}
            </p>
          </div>
        </div>
      ))}
      {!isFullStack && (
        <Link to="/fullStack" onClick={scrollToTop}>
          <button className="bg-secondary w-[800px] mt-6 mx-5 mb-5 text-themeColor  rounded-xl py-2">
            Full Stack
          </button>
        </Link>
      )}
    </div>
  );
};

export default Stack;
