import {
  Liked,
  channel,
  history_svg,
  home_svg,
  playlist,
  shorts_svg,
  subscriptions_svg,
  watch_later,
  trending,
  shopping_bag,
  music,
  movies,
  live_svg,
  gaming_svg,
  news_svg,
  sports_svg,
  fashionAndBeauty_svg,
  podcast_svg,
  your_vedio_svg,
} from "../Utils/Logo_svg";

const SideBar = () => {
  return (
    <div className="text-xl text-gray-700 w-[280px] py-5 overflow-y-auto h-[70rem]  font-sans">
      <div className="my-5 px-10">
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon">{home_svg}</div>
            <div className="sidebar-label ml-4">Home</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{shorts_svg}</div>
            <div className="sidebar-label ml-4">Shorts</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{subscriptions_svg}</div>
            <div className="sidebar-label ml-4">Subscriptions</div>
          </div>
        </ul>
      </div>
      <div className="my-10 px-10">
        <h1 className="my-6 font-bold">You</h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon">{channel}</div>
            <div className="sidebar-label ml-4">Your Channel</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{history_svg}</div>
            <div className="sidebar-label ml-4">History</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{playlist}</div>
            <div className="sidebar-label ml-4">PlayList</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{your_vedio_svg}</div>
            <div className="sidebar-label ml-4">Your Videos</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{watch_later}</div>
            <div className="sidebar-label ml-4">Watch Later</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{Liked}</div>
            <div className="sidebar-label ml-4">Liked Videos</div>
          </div>
        </ul>
      </div>
      <div className="my-10 px-10">
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
      </div>
      <div className="my-10 px-10">
        <h1 className="my-6 font-bold">Explore</h1>
        <ul>
          <div className="flex my-6">
            <div className="sidebar-icon">{trending}</div>
            <div className="sidebar-label ml-4">Trending</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{shopping_bag}</div>
            <div className="sidebar-label ml-4">Shopping</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{music}</div>
            <div className="sidebar-label ml-4">Music</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{movies}</div>
            <div className="sidebar-label ml-4">Movies</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{live_svg}</div>
            <div className="sidebar-label ml-4">Live</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{gaming_svg}</div>
            <div className="sidebar-label ml-4">Gaming</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{news_svg}</div>
            <div className="sidebar-label ml-4">News</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{sports_svg}</div>
            <div className="sidebar-label ml-4">Sports</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{fashionAndBeauty_svg}</div>
            <div className="sidebar-label ml-4">Fashion & Beauty</div>
          </div>
          <div className="flex my-6">
            <div className="sidebar-icon">{podcast_svg}</div>
            <div className="sidebar-label ml-4">Podcast</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
