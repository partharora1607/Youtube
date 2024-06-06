import { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import user_icon from "../images/user_icon.jpg";
import { YT_SUGGESTION_API } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../Utils/Store/Slice/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        fetchSuggestion();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchSuggestion = async () => {
    const newSuggestion = await fetch(YT_SUGGESTION_API + searchText);
    const json = await newSuggestion.json();
    setSuggestions(json?.[1]);

    // update in cache
    dispatch(
      cacheResults({
        [searchText]: json?.[1],
      })
    );
  };

  return (
    <div className="relative">
      <div className="mt-5 ml-10 flex pb-2 ">
        {/* Logo and Menu */}
        <div className="flex fixed">
          <img alt="youtube-logo" src={Logo} className="h-[3rem] ml-7" />
        </div>

        {/* Search Bar */}
        <div className="flex ml-[45rem] h-[3rem]">
          <input
            type="text"
            className="pl-10 text-xl border-black-400 border-2 w-[50rem] rounded-l-full"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className="border-black-400 border-2 rounded-r-full px-4 font-semibold bg-gray-50 hover:bg-gray-100 text-lg">
            Search
          </button>
        </div>
        {/* User Icon */}
        <div className="flex justify-center items-center">
          <img src={user_icon} alt="user-icon" className="h-14 w-14 -mt-4 ml-[50rem] rounded-full object-cover" />
        </div>
      </div>
      {suggestion.length > 0 && showSuggestion && (
        <div className="ml-[48rem] w-[49rem] bg-white absolute top-[50px] shadow-2xl rounded-xl">
          <ul className="px-8 py-2 text-lg my-2">
            {suggestion.map((sugg, idx) => {
              return (
                <li className="my-1 hover:bg-gray-100 cursor-default" key={idx}>
                  {sugg}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
