import Stack from "../components/Home/Stack";
import { fullStack } from "../constants/StackData";

const FullStack = () => {
  return (
    <div>
      <div>
        <div className=" bg-primary rounded-[24px] mt-5">
          {/* <p className="pt-3 pl-6 text-[36px]">Full Stack</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <p className="m-5 font-light text-textSecondary">
              Welcome to my Project Page! I'm Leon, a web designer focused on
              crafting seamless, captivating digital experiences. Explore my
              work—a blend of responsive design and intuitive UI. Let's create
              digital stories together!.
            </p>
          </div> */}
        </div>
        <div className="mt-5">
          <Stack stack={fullStack} isFullStack={true} />
        </div>
      </div>
    </div>
  );
};

export default FullStack;
