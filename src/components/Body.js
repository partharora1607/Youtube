import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div>
      <div className="shadow-xl">
        <Header />
      </div>
      <div className="">
        <div className="fixed bg-gray-800 bg-opacity-80 left-0 top-[5rem] h-full overflow-y-auto text-xl w-[280px] py-5 mr-10 font-sans mt-3">
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
