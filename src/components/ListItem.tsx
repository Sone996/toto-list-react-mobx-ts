import { FC } from "react";
import Card from "./UI/Card";
import { item } from "../types/types";

const ListItem: FC<item> = ({ title, completed, id }) => {
  const deleteItem = () => {
    console.log("sksksksskskks");
  };

  const editItem = () => {
    console.log("edit");
  };

  return (
    <Card key={id} bg="bg-lightGray">
      <span className="text-green-300 text-2xl py-2">{title}</span>
      <span className="text-green-300">
        Copleted: {completed ? "Yes" : "No"}
      </span>
      <div className="flex justify-end">
        <span className="button bg-lightBlue" onClick={editItem}>
          Edit
        </span>
        <span className="button bg-darkRed ml-3" onClick={deleteItem}>
          Delete
        </span>
      </div>
    </Card>
  );
};

export default ListItem;
