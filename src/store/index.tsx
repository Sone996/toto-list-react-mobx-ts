import { createContext, FC, PropsWithChildren, useContext } from "react";
import { ToDoStore } from "./ToDoStore";

type RootStateContextValue = {
  todoStore: ToDoStore;
};

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const todoStore = new ToDoStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider value={{ todoStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const UserRootStore = () => useContext(RootStateContext);
