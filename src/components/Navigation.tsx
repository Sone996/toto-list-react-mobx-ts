import { FC } from "react";
import { useHistory } from "react-router-dom";

const Navigation: FC = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  const goNewItem = () => {
    history.push("/new-item");
  };

  return (
    <div className="flex w-1/2 justify-around py-2">
      <span className="button bg-lightBlue cursor-pointer" onClick={goHome}>
        Home
      </span>
      <span className="button bg-lightBlue cursor-pointer" onClick={goNewItem}>
        New Item
      </span>
    </div>
  );
};

export default Navigation;
