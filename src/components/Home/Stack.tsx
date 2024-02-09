import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

interface StackProps {
  stack: {
    logo?: string;
    title: string;
    subTitle: string;
    description: string;
  }[];
  isFullStack?: boolean;
}

const Stack: React.FC<StackProps> = ({ stack, isFullStack }) => {
  return (
    <div className=" bg-primary rounded-[24px]">
      <div className="bg-primary rounded-[24px]">
        <p className="pt-3 pl-5 text-[36px]">Explore My Tech Stacks</p>
      </div>
      {stack?.map((data, index) => (
        <div key={index} className="flex flex-wrap gap-4">
          <div className="flex ml-5 mt-5">
            <div className="bg-secondary flex justify-center items-center rounded-[24px] py-4 px-3 mr-3">
              <img src={data.logo} width={40} height={40} />
            </div>
            <div className="flex flex-col justify-center">
              <p>{data.title}</p>
              <p className="text-textSecondary">{data.subTitle}</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-[6px] md:ml-12 h-[100px] bg-secondary"></div>
            <p className=" pb-4 mx-8 font-light text-textSecondary">
              {data.description}
            </p>
          </div>
        </div>
      ))}
      {!isFullStack && (
        <div className="flex justify-center">
          <Link to="/fullStack" onClick={scrollToTop}>
            <button className="bg-secondary p-4  mt-6 mx-5 mb-5 text-themeColor  rounded-xl py-2">
              Full Stack
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Stack;
