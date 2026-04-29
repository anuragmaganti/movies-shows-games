import { useState } from "react";
import { Triangle } from "lucide-react";

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
        <div className="absolute">
          <li>hi</li>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
