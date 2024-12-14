import React, { useRef } from "react";

const AddTodo = ({ addOngoingTodo }) => {
  const inputRef = useRef(null);

  const onTodoSubmit = (e) => {
    e.preventDefault();

    addOngoingTodo(inputRef.current?.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onTodoSubmit} className="add-todo">
      <h1>Add Todo</h1>
      <input ref={inputRef} defaultValue="" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default React.memo(AddTodo);
