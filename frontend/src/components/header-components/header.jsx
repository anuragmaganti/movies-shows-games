import Search from "./search";
import ProfileMenu from "./profileMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header text-sm ">
      <header className="flex pl-14 pr-14 max-w-full pt-5 items-center">
        <img src="logo.png" alt="logo of anuflix" className="max-h-7.5" />
        <nav className="flex pl-10.5 gap-5">
          <NavLink
            to={"/"}
            end
            className={({ isActive }) =>
              isActive ? "text-white" : "text-white/80 hover:text-white/70"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to={"/tv-shows"}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-white/80 hover:text-white/70"
            }
          >
            TV Shows
          </NavLink>
          <NavLink
            to={"/video-games"}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-white/80 hover:text-white/70"
            }
          >
            Video Games
          </NavLink>
        </nav>
        <div className="flex ml-auto gap-5">
          <Search />
          <ProfileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
