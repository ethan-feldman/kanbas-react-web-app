import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/redux-examples/HelloRedux/helloReducer";
import counterReducer from "../a4/redux-examples/CounterRedux/counterReducer";
import addReducer from "../a4/redux-examples/AddRedux/addReducer";
import todosReducer from "../a4/redux-examples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;