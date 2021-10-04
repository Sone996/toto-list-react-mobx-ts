import { title } from "process";
import { INewItemForm } from "../../types/types";
import { toDoRepo } from "../repo/ToDoStore.repo";

class ToDoService {
  async fetchToDo() {
    try {
      const res = await toDoRepo.fetchToDo();
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addItem(data: INewItemForm) {
    try {
      const res = await toDoRepo.addItem(data);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteItem(id: number) {
    try {
      const res = await toDoRepo.deleteItem(id);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async editItem(data: any) {
    try {
      const res = await toDoRepo.editItem({
        id: data.id,
        data: {
          title: data.title,
          completed: data.completed,
        },
      });
      return Promise.resolve(res);
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export const toDoService = new ToDoService();
