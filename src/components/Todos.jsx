import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos({ onEditTodo }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleEditTodo = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    onEditTodo(todoToUpdate);
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex justify-between gap-2">
              <button
                onClick={() => handleEditTodo(todo.id)}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 306.637 306.637"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path>{" "}
                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path>{" "}
                      </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(Todos);
