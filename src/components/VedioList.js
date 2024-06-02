import { useSelector } from "react-redux";
import useFetchVedio from "../hooks/useFetchVedio";
import VedioCard from "./VedioCard";

const VedioList = () => {
  useFetchVedio();
  const VedioList = useSelector((store) => store.vedio.vedioList);
  if (!VedioList) return;

  console.log("vedioList omg : ", VedioList);
  return (
    <div className="flex flex-wrap">
      {VedioList.map((vedio) => (
        <VedioCard key={vedio.id} vedio={vedio} />
      ))}
    </div>
  );
};

export default VedioList;
