import { FC } from "react";
import Card from "./UI/Card";
import { item } from "../types/types";
import { UserRootStore } from "../store";

const ListItem: FC<item> = ({ title, completed, id }) => {
  const { todoStore } = UserRootStore();

  const deleteItem = () => {
    todoStore.deleteItem(id);
  };

  const editItem = () => {
    todoStore.setForEdit({ completed: true, title: title, id: id });
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
