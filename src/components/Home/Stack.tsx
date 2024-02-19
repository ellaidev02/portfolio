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
    <div className=" bg-primary rounded-[24px] text-black font-semibold">
      <div className="bg-primary rounded-[24px]">
        <p className="pt-3 pl-5 text-[36px]">My Tech Stacks</p>
      </div>
      {stack?.map((data, index) => (
        <div key={index} className="flex flex-wrap gap-4">
          <div className="flex ml-5 mt-5">
            <div className="bg-secondary flex justify-center items-center rounded-[24px] py-4 px-3 mr-3">
              <img src={data.logo} width={40} height={40} />
            </div>
            <div className="flex flex-col justify-center">
              <p>{data.title}</p>
              <p className="text-textSecondary font-bold">{data.subTitle}</p>
            </div>
          </div>
          <div className="flex ">
            <div className="w-[6px] md:ml-12 h-[100px] "></div>
            <p className="font-semibold pb-4 mx-8 text-gray-800">
              {data.description}
            </p>
          </div>
        </div>
      ))}
      {!isFullStack && (
        <div className="flex justify-center">
          <Link to="/fullStack" onClick={scrollToTop}>
            <button className=" bg-gray-300 text-black font-semibold p-4  mt-6 mx-5 mb-5  rounded-xl py-2">
              Full Stack
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Stack;
