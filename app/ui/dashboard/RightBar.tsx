import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="container">
      <div className="item bg-gradient-to-t from-[#182237] to-[#253352] relative p-5 rounded-lg mb-5">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image
            src={"/astronaut.png"}
            className="object-contain opacity-[0.2]"
            fill
            alt="Rocket"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-semibold text-[--textSoft]">
            How to use the new version of dashboard?
          </h3>
          <span>Take 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus
            harum pariatur earum, distinctio minima.
          </p>
          <button className="flex items-center gap-2 bg-[#5d57c9] rounded-md p-2.5 w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="item bg-gradient-to-t from-[#182237] to-[#253352] relative p-5 rounded-lg mb-5">
        <div className="flex flex-col gap-5">
          <span>🔥 Coming Soon</span>
          <h3>How to use the new version of dashboard?</h3>
          <span>Take 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus
            harum pariatur earum, distinctio minima.
          </p>
          <button className="flex items-center gap-2 bg-[#5d57c9] rounded-md p-2.5 w-max">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
