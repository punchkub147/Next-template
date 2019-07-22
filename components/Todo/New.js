import { useState } from "react";
import { useStoreActions } from "easy-peasy";

const keyCode = {
  ENTER: 13
};

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, setValue, onChange };
};

const TodoNew = ({ onSubmit }) => {
  const {
    value: newTodo,
    setValue: setNewTodo,
    onChange: onChangeTodo
  } = useInput("");
  const handleAddTodo = e => {
    if (e.keyCode === keyCode.ENTER) {
      onSubmit({
        title: newTodo
      });
      setNewTodo("");
    }
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="new todo"
        value={newTodo}
        onChange={onChangeTodo}
        onKeyUp={handleAddTodo}
      />
    </div>
  );
};

export default TodoNew;
