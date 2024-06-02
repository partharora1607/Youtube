import { useEffect } from "react";
import { API_KEY } from "../Utils/constants";
const useFetchVedio = () => {
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
        API_KEY
    );
    const json = await data.json();
    console.log(json);
  };
};

export default useFetchVedio;
