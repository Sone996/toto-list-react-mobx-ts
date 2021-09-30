import { FC } from "react";
import ListComponent from "../components/ListComponent";

const Home: FC = () => {
  return (
    <div className="flex flex-col w-full px-64 pb-16 flex-grow text-lightBlue">
      <ListComponent />
    </div>
  );
};

export default Home;
