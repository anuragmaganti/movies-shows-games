import { useState } from "react";
import { Triangle, FolderHeart, Code } from "lucide-react";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(!isOpen)}
    >
      <button
        type="button"
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <img src="me.png" alt="Profile" className="max-w-7.5 rounded-sm" />
        <Triangle
          width={9}
          fill="white"
          className={`duration-200 ${isOpen ? "rotate-0" : "rotate-180"}`}
          strokeWidth={0}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full w-45 p-3 flex flex-col gap-2 border border-gray-700 ">
          <a className="flex gap-3 pl-2" href="https://www.amaganti.com/">
            <FolderHeart></FolderHeart>
            <div>Portfolio site</div>
          </a>
          <a
            className="flex gap-3 pl-2"
            href="https://github.com/anuragmaganti"
          >
            <Code></Code>
            <div>Github</div>
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
