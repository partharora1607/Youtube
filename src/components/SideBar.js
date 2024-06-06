import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-xl text-gray-800 w-[280px] py-5  overflow-y-auto h-full mr-10 font-sans custom-scrollbar-hide -mt-10">
      <div className="my-5 px-10 ">
        <ul>
          <div className="flex">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Shorts</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Subscriptions</div>
          </div>
        </ul>
      </div>
      <div className="my-10 px-10 divide-y">
        <h1 className="my-6 font-bold">You </h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Your Channel</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">History</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">PlayList</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Your Videos</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Watch Later</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Liked Videos</div>
          </div>
        </ul>
      </div>
      <div className="my-10 px-10 divide-y">
        <h1 className="my-6 font-bold">Subscriptions</h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">StudyIQ IAS</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Hindusthan Times</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">WION</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Zee News</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">NDTV</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Physics Walla</div>
          </div>
        </ul>
      </div>
      <div className="my-10 px-10 divide-y">
        <h1 className="my-6 font-bold">Explore</h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Trending</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Shopping</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Music</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Movies</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Live</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Gaming</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">News</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Sports</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Fashion & Beauty</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon"></div>
            <div className="sidebar-label ml-4">Podcast</div>
          </div>
        </ul>
      </div>
      <style>
        {`
          .custom-scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default SideBar;
