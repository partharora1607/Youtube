import useFetchVedio from "../hooks/useFetchVedio";

const VedioList = () => {
  useFetchVedio();
  return <div>VedioList</div>;
};

export default VedioList;
