import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ListItem from "./ListItem";
import Scroll from "./UI/Scroll";
import { item } from "../types/types";
import { UserRootStore } from "../store";

const ListComponent: FC = observer(() => {
  const { todoStore } = UserRootStore();

  useEffect(() => {
    todoStore.ItemList();
  }, [todoStore]);

  if (todoStore?.todoList.length === 0) {
    return (
      <div className="relative flex flex-grow">
        <span className="text-white text-3xl">...loading</span>
      </div>
    );
  }

  return (
    <div className="relative flex flex-grow">
      <Scroll>
        <div>
          {todoStore.getTodoList.map((item: item) => (
            <div key={item.id}>
              <ListItem
                title={item.title}
                completed={item.completed}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  );
});

export default ListComponent;
