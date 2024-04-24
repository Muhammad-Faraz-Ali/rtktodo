import { createSlice, nanoid } from "@reduxjs/toolkit";
const initState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      console.log("index action", action);
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log("index action", action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { id: action.payload.id, text: action.payload.text };
        } else {
          return todo;
        }
      });
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;