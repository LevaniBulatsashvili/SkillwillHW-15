import React from "react";

const DoneTodos = ({ id, todo, undoTodo, deleteTodo }) => {
  return (
    <div className="done-todos">
      <p>{todo}</p>
      <div>
        <button onClick={() => undoTodo(id)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <button onClick={() => deleteTodo(id)}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(DoneTodos);
