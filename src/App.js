import React from 'react';
import './App.css';
import InputBox from "./InputBox";
import TodoItemsList from "./TodoItemsList";

function App() {
  return (
    <div className="App">
      <InputBox />
      <TodoItemsList />
      {/*<CompletedList />*/}
    </div>  
  );
}

export default App;
