import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const [isEditTodo, setIdEditTodo] = useState(false);
  const [todoToUpdateId, setTodoToUpdateId] = useState();
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const updateTodoHandler = () => {
    dispatch(updateTodo({ id: todoToUpdateId, text: input }));
    setInput("");
    setTodoToUpdateId("");
    setIdEditTodo(false);
  };

  const editTodoHandler = (todo) => {
    setInput(todo?.text);
    setTodoToUpdateId(todo?.id);
    setIdEditTodo(true);
  };

  return (
    <>
      <form className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={isEditTodo ? updateTodoHandler : addTodoHandler}
        >
          {isEditTodo ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <Todos onEditTodo={editTodoHandler} />
    </>
  );
}

export default AddTodo;
