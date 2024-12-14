import React, { useCallback, useState } from "react";
import OngoingTodo from "./OngoingTodo";
import DoneTodos from "./DoneTodos";
import AddTodo from "./AddTodo";
import useDetectDevice from "../hooks/useDetectDevice";
import useLocalStorage from "../hooks/useLocalStorage";

const DUMMYDATA = [
  { id: 1, description: "Buy Milk" },
  { id: 2, description: "Clean Dishes" },
  { id: 3, description: "Make Dinner" },
];

const TodoList = () => {
  console.log("TodoList log");

  const [lastElementId, setLastElementId] = useState(3);
  const [ongoingTodos, setOngoingTodos] = useState(DUMMYDATA);
  const [doneTodos, setDoneTodos] = useState([]);
  const device = useDetectDevice();
  const [mode, setMode] = useLocalStorage("mode", "light");

  const addOngoingTodo = (inputValue) => {
    const newTodo = {
      id: lastElementId + 1,
      description: inputValue,
    };

    setLastElementId((prev) => prev + 1);
    setOngoingTodos((prev) => [...prev, newTodo]);
  };

  const finishTodo = useCallback(
    (id) => {
      const finishedTodo = ongoingTodos.find((todo) => todo.id === id);

      setOngoingTodos((prev) => prev.filter((todo) => todo.id !== id));
      setDoneTodos((prev) => [...prev, finishedTodo]);
    },
    [ongoingTodos]
  );

  const undoTodo = useCallback(
    (id) => {
      const undoneTodo = doneTodos.find((todo) => todo.id === id);

      setOngoingTodos((prev) => [...prev, undoneTodo]);
      setDoneTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [doneTodos]
  );

  const deleteTodo = useCallback(
    (id) => setDoneTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  return (
    <div className={`todo-list ${device === "Desktop" ? mode : "light"}`}>
      {device === "Desktop" && (
        <button className="mode-btn" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      )}

      <AddTodo addOngoingTodo={addOngoingTodo} />

      <div className="todos">
        <div>
          <h1>Todos</h1>
          {ongoingTodos.map((todo) => (
            <OngoingTodo
              key={todo.id}
              id={todo.id}
              todo={todo.description}
              finishTodo={finishTodo}
            />
          ))}
        </div>
        <div>
          <h1>Todones</h1>
          {doneTodos.map((todo) => (
            <DoneTodos
              key={todo.id}
              id={todo.id}
              todo={todo.description}
              undoTodo={undoTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
