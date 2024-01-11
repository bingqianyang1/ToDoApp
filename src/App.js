import './App.css';
import React, { useState } from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])

  //add new to do
  const addNew = (newContent) => {
    const newToDo = {
      id: uuidv4(),
      content: newContent,
      isCompleted: false
    }
    setTodos([...todos, newToDo]);
  }

  //change todo status
  const changeStatus = (id) => {
    setTodos(todos => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      const activeTodos = updatedTodos.filter(todo => !todo.isCompleted);
      const completedTodos = updatedTodos.filter(todo => todo.isCompleted);
      return [...activeTodos, ...completedTodos];
    });
  };


  //delete todo
  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  //move todo to the top
  const moveTop = (id) => {
    setTodos(todos => {
      const idx = todos.findIndex(todo => todo.id === id);
      if (idx <= 0) return todos;
      const newOrder = [...todos];
      const [target] = newOrder.splice(idx, 1);
      newOrder.unshift(target);
      return newOrder;
    });
  };

  //move todo down
  const moveDown = (id) => {
    setTodos(todos => {
      const idx = todos.findIndex(todo => todo.id === id);
      if (idx === todos.length - 1) return todos;
      return [...todos.slice(0, idx), todos[idx + 1], todos[idx], ...todos.slice(idx + 2)];
    });
  };

  return (
    <div>
      <h1 className='App'>
        My To-Do List
      </h1>
      <AddToDo addNew={addNew} />
      < ToDoList todos={todos} changeStatus={changeStatus} deleteToDo={deleteToDo} moveTop={moveTop} moveDown={moveDown} />

    </div>
  );
}

export default App;
