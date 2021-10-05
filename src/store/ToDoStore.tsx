import {
  // action,
  // configure,
  makeAutoObservable,
  // observable,
  runInAction,
} from "mobx";
import { INewItemForm, item } from "../types/types";
import { toDoService } from "./services/ToDoStore.service";

// configure({
//   useProxies: "never"
// })

export class ToDoStore {
  // STATE
  // @observable todoList: item[] = [];
  todoList: item[] = [];
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  // COMPUTED
  get getTodoList() {
    return this.todoList;
  }
  // END :: COMPUTED

  // ACTIONS
  // @action
  ItemList = async () => {
    toDoService
      .fetchToDo()
      .then((res) => {
        runInAction(() => {
          this.todoList = res.data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // @action
  addItem = async (data: INewItemForm) => {
    toDoService
      .addItem(data)
      .then((res) => {
        runInAction(() => {
          this.todoList = [...this.todoList, res.data];
        });
        alert("Item Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // @action
  deleteItem = async (data: number) => {
    toDoService
      .deleteItem(data)
      .then((res) => {
        console.log(res);
        alert("Item Deleted");
        this.ItemList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // @action
  setForEdit = async (data: any) => {
    toDoService
      .editItem(data)
      .then((res) => {
        console.log(res);
        alert("Item Finished")
        this.ItemList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // END :: ACTIONS
}
