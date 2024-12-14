import React from "react";

const OngoingTodo = ({ id, todo, finishTodo }) => {
  return (
    <div className="ongoing-todos">
      <p>{todo}</p>
      <button onClick={() => finishTodo(id)}>Done</button>
    </div>
  );
};

export default React.memo(OngoingTodo);
