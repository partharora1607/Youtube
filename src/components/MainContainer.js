import Header from "./Header";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="flex mt-5">
        {/* Sidebar */}
        <div className="fixed left-0 top-[5rem] h-full overflow-y-auto text-xl text-gray-700 w-[280px] py-5 mr-10 font-sans">
          <SideBar />
        </div>

        {/* Video Container */}
        <div className="ml-[280px] flex-grow">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
