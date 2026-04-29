import { useRef, useState } from "react";
import { Triangle, FolderHeart, Code } from "lucide-react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);

  function closeMenuDelay() {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }

  function openMenu() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsOpen(true);
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuDelay}
    >
      <button
        type="button"
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <img src="me.png" alt="Profile" className="max-w-7.5 rounded-sm" />
        <Triangle
          width={9}
          fill="white"
          className={`duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
          strokeWidth={0}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-3 right-0 top-full w-45 p-3 flex flex-col gap-2 border border-gray-800">
          <a
            className="group flex gap-3 pl-2 "
            href="https://www.amaganti.com/"
          >
            <FolderHeart></FolderHeart>
            <div className="group-hover:underline">Portfolio site</div>
          </a>
          <a
            className="group flex gap-3 pl-2"
            href="https://github.com/anuragmaganti"
          >
            <Code></Code>
            <div className="group-hover:underline">Github</div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
