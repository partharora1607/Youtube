import { useEffect } from "react";
import { API_KEY } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addVedios, updateVedios } from "../Utils/Store/Slice/vedioSlice";
const useFetchVedio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataIN = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
        API_KEY
    );
    const jsonIN = await dataIN.json();
    dispatch(addVedios(jsonIN?.items));
  };
};

export default useFetchVedio;
