import Logo from "../images/Logo.png";
import Menu from "../images/Menu.png";
import user_icon from "../images/user_icon.jpg";

const Header = () => {
  return (
    <div className="mt-5 ml-10 flex pb-2">
      <div className="flex">
        <img alt="Menu-icon" src={Menu} className="h-[3rem] rounded-full cursor-pointer" />
        <img alt="youtube-logo" src={Logo} className="h-[3rem] ml-7" />
      </div>
      <div className="flex ml-[32rem] h-[3rem]">
        <input
          type="text"
          className="pl-10 text-xl border-blue-400 border-2 w-[50rem] rounded-l-full"
          placeholder="Search"
        />
        <button className="border-blue-400 border-2 rounded-r-full px-4 font-semibold bg-gray-50 hover:bg-gray-100 text-lg">
          Search
        </button>
      </div>
      <div className="flex">
        <img src={user_icon} alt="user-icon" className="h-20 -mt-4 ml-[40rem]" />
      </div>
    </div>
  );
};

export default Header;
