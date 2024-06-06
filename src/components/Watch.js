import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsConatiner";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="ml-[280px] ">
        <div className="flex">
          <iframe
            className="ml-5 my-5 rounded-3xl"
            width="1500"
            height="800"
            src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="border border-gray-300 ml-10 w-[35rem] rounded-3xl bg-slate-50 bg-opacity-50 overflow-y-hidden">
            <LiveChat />
          </div>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default Watch;
