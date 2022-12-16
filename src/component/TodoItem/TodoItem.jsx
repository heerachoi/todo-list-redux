import { useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from '../../redux/modules/todos.js';
import { TodoContainer, TodoContext, TodoTitle, TodoListButtons, ButtonWrapper, DetailsButton, DeleteButton, DoneButton } from './style';

const TodoItem = ({ id, inputTitle, input, isDone }) => {
  const dispatch = useDispatch();

  // 완료 버튼이 onClick되면 실행되는 부분
  const toggleDoneHandler = (id) => {
    dispatch(toggleDone({ id }));
  };

  // 삭제 버튼이 onClick되면 실행되는 부분
  const deleteTodoHandler = (id) => {
    if (window.confirm('해당 목록을 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <TodoContainer>
      <TodoTitle>📍 {inputTitle}</TodoTitle>
      <TodoContext>{input}</TodoContext>
      <TodoListButtons>
        <DetailsButton to={`/${id}`}>상세보기</DetailsButton>
        <ButtonWrapper>
          <DeleteButton onClick={() => deleteTodoHandler(id)}>삭제</DeleteButton>
          <DoneButton onClick={() => toggleDoneHandler(id)}>{isDone ? '취소' : '완료'} </DoneButton>
        </ButtonWrapper>
      </TodoListButtons>
    </TodoContainer>
  );
};

export default TodoItem;
