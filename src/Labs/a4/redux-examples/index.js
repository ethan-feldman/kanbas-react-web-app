import React from "react";
import HelloRedux from "HelloRedux";
import CounteRedux from "CounterRedux";
import TodoList from "todos/TodoList"


const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounteRedux/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;