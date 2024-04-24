import React, { useCallback, useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";
import { useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const todos = useSelector((state) => state.todos);
  const handleEditableTodoId = useCallback(
    (todoId) => {
      const todoName = todos.find((todo) => todo.id === todoId)?.name;
      setInput(todoName);
      setIsEdit(true);
    },
    [todos]
  );
  return (
    <>
      <AddTodo input={input} setInput={setInput} isEdit={isEdit} />
      <Todos handleEditableTodoId={handleEditableTodoId} />
      {/* <h1>Hello</h1> */}
    </>
  );
}

export default App;
