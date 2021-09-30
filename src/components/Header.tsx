import { FC } from "react";
import logo from "../logo.svg";

const Header: FC = () => {
  return (
    <div className="flex">
      <span className="text-5xl text-lightBlue">To-Do List</span>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Header;
