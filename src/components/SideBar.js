import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-xl text-white w-[280px] py-5 overflow-y-auto h-[70rem] mr-10 font-sans custom-scrollbar-hide -mt-10">
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
      <div className="my-10 px-10">
        <h1 className="my-6 font-bold">You</h1>
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
      {/* <div className="my-10 px-10">
        <h1 className="my-6 font-bold">Subscriptions</h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon">And TV</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">Hindusthan Times</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">WION</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">NDTV</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">Zee News</div>
          </div>
        </ul>
      </div> */}
      <div className="my-10 px-10">
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
