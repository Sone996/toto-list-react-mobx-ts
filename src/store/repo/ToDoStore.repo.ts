import { api } from "../../api/Api";
import { INewItemForm } from "../../types/types";

const ROUTES = {
  TODOS: "/todos",
};

class ToDoRepo {
  fetchToDo() {
    return api.get(ROUTES.TODOS);
  }
  addItem(data: INewItemForm) {
    return api.post(ROUTES.TODOS, data);
  }
  deleteItem(id: number) {
    return api.delete(`${ROUTES.TODOS}/${id}`);
  }
  editItem(item: any) {
    console.log(item);
    return api.patch(`${ROUTES.TODOS}/${item.id}`, item.data);
  }
}

export const toDoRepo = new ToDoRepo();
