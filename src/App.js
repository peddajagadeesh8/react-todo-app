import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Tilt from 'react-parallax-tilt'

function App() {
  return (
    <Tilt>
    <div className='todo-app'>
      <div className='bg'></div>
      <TodoList />
    </div>
    </Tilt>
  );
}

export default App;