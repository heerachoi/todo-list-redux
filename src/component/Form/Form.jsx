import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/modules/todos.js';
import { TodoForm, InputGroup, ButtonAdd, TaskInput, Title } from './style.js';

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
    setInputTitle('');
    setInput('');
  };

  return (
    <TodoForm>
      <form onSubmit={onFormSubmit}>
        <InputGroup>
          <Title>제목</Title>
          <TaskInput type='text' value={inputTitle} name='text' onChange={onInputTitleChange} />
          <Title>내용</Title>
          <TaskInput type='text' value={input} name='text' onChange={onInputChange} />
          <ButtonAdd type='submit'>+</ButtonAdd>
        </InputGroup>
      </form>
    </TodoForm>
  );
};

export default Form;
