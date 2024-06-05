import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="ml-[280px]">
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
      </div>
    </>
  );
};

export default Watch;
