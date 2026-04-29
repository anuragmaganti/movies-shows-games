import Search from "./search";
import ProfileMenu from "./profileMenu";

const Header = () => {
  return (
    <div className="header text-sm font-thin">
      <header className="flex pl-14 pr-14 max-w-full pt-5 items-center">
        <img src="logo.png" alt="logo of anuflix" className="max-h-7.5" />
        <div className="flex pl-10.5 gap-5">
          <h1>Movies</h1>
          <h1>Songs</h1>
          <h1>Video Games</h1>
        </div>
        <div className="flex ml-auto gap-5">
          <Search />
          <ProfileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
