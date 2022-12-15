// import './App.css';
// import React, {useState} from 'react';
// import {v4 as uuidv4} from 'uuid';
// import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

// import Header from './component/Header/Header';
// import Form from './component/Form/Form';
// import TodoList from './component/TodoList/TodoList';
// import Details from './component/Details/Details';

// function App() {
//   // State
//   const [inputTitle, setInputTitle] = useState('');
//   const [input, setInput] = useState('');
//   const [todos, setTodos] = useState([
//     {
//       id: uuidv4(),
//       title: '알고리즘',
//       context: '알고리즘 문제 풀기',
//       isDone: false,
//     },
//     {
//       id: uuidv4(),
//       title: '리액트',
//       context: 'Todo list 만들기',
//       isDone: true,
//     },
//   ]);
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path='/'>
//             <Header />
//             <Form inputTitle={inputTitle} setInputTitle={setInputTitle} input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
//             <TodoList todos={todos} setTodos={setTodos} />
//           </Route>
//           <Route path='/:id'>
//             <Details todos={todos} />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';

import Router from './routers/Router.js';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
