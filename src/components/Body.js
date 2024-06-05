import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="">
        <div className="fixed left-0 top-[5rem] h-full overflow-y-auto text-xl w-[280px] py-5 mr-10 font-sans mt-3">
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
