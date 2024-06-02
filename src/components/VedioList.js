import { useSelector } from "react-redux";
import useFetchVedio from "../hooks/useFetchVedio";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioList = () => {
  useFetchVedio();
  const VedioList = useSelector((store) => store.vedio.vedioList);
  if (!VedioList) return;

  return (
    <div className="flex flex-wrap">
      {VedioList.map((vedio) => (
        <Link to={"/watch?v=" + vedio.id} key={vedio.id}>
          <VedioCard vedio={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioList;
