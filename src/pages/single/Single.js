import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Singlepost from "../../components/Singlepost/Singlepost";

const Single = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;
