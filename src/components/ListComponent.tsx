import { FC } from "react";
import ListItem from "./ListItem";
import Scroll from "./UI/Scroll";
import { item } from "../types/types";

const data: any = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

const ListComponent: FC = () => {
  return (
    <div className="relative flex flex-grow">
      <Scroll>
        <div>
          {data.map((item: item) => (
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
};

export default ListComponent;
