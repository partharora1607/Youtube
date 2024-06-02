import Header from "./Header";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div>
      <div className="shadow-xl">
        <Header />
      </div>
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
