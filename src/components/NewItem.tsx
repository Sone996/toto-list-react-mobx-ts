import { FC, useState } from "react";
import { UserRootStore } from "../store";
import Card from "./UI/Card";

const defaultForm = {
  title: "",
  body: "",
  userId: 1,
};

const NewItem: FC = () => {
  const { todoStore } = UserRootStore();
  const [form, setForm] = useState(defaultForm);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const addItem = () => {
    todoStore.addItem(form);
    setForm(defaultForm);
  };

  return (
    <Card bg="bg-lightGray">
      <div className="flex flex-col p-2 bg-lightGray my-4">
        <span>Task: </span>
        <input
          className="input"
          type="text"
          name="title"
          value={form.title}
          onChange={inputHandler}
        />
        <div className="flex w-1/12 my-2">
          <span className="bg-lightBlue button" onClick={addItem}>
            Add
          </span>
        </div>
      </div>
    </Card>
  );
};

export default NewItem;
