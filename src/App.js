import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import TodoList from './component/TodoList';
import {v4 as uuidv4} from 'uuid';
import {Route, Switch} from 'react-router-dom';
import Details from './component/pages/Details';

function App() {
  // State
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: '알고리즘',
      context: '알고리즘 문제 풀기',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '리액트',
      context: 'Todo list 만들기',
      isDone: true,
    },
  ]);
  return (
    <div>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Form inputTitle={inputTitle} setInputTitle={setInputTitle} input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
          </Route>
          <Route path='/:id'>
            <Details todos={todos} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
