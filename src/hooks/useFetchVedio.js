import { useEffect } from "react";
import { API_KEY } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addVedios } from "../Utils/Store/Slice/vedioSlice";
const useFetchVedio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataUS = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=" +
        API_KEY
    );
    const jsonUS = await dataUS.json();
    dispatch(addVedios(jsonUS?.items));
    const dataIN = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
        API_KEY
    );
    const jsonIN = await dataIN.json();
    dispatch(addVedios(jsonIN?.items));

    const dataKR = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=KR&key=" +
        API_KEY
    );
    const jsonKR = await dataKR.json();
    dispatch(addVedios(jsonKR?.items));

    const dataCH = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=JP&key=" +
        API_KEY
    );
    const jsonCH = await dataCH.json();
    dispatch(addVedios(jsonCH?.items));
  };
};

export default useFetchVedio;
