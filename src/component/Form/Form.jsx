import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Form.css';
import { addTodo } from '../../redux/modules/todos.js';
import { TodoForm } from './style.js';

const Form = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // 제목이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  // 내용이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  //  onSubmit로 실행되는 부분
  const onFormSubmit = (event) => {
    event.preventDefault();
    // 입력 값 체크
    if (!inputTitle || !input) {
      return alert('제목 또는 내용이 입력되지 않았습니다.');
    }
    dispatch(
      addTodo({
        id: uuidv4(),
        inputTitle,
        input,
        isDone: false,
      })
    );
    // setTodos([...todos, {id: uuidv4(), title: inputTitle, context: input, isDone: false}]);
    setInputTitle('');
    setInput('');
    // return true;
  };

  return (
    <TodoForm>
      <form onSubmit={onFormSubmit}>
        <div className='input-group'>
          <div className='title'>제목</div>
          <input type='text' className='task-input' value={inputTitle} name='text' onChange={onInputTitleChange} />
          <div className='title'>내용</div>
          <input type='text' className='task-input' value={input} name='text' onChange={onInputChange} />
        </div>
        <button className='button-add' type='submit'>
          +
        </button>
      </form>
    </TodoForm>
  );
};

export default Form;
