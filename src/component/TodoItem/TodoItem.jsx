import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Buttons from './Buttons';
import {toggleDone, deleteTodo} from '../../redux/modules/todos.js';
import {TodoListWarp, TodoContainer} from './style';

const TodoItem = ({id, inputTitle, input, isDone}) => {
  const dispatch = useDispatch();

  // 완료 버튼이 onClick되면 실행되는 부분
  const toggleDoneHandler = (id) => {
    dispatch(toggleDone({id}));
  };

  // 삭제 버튼이 onClick되면 실행되는 부분
  const deleteTodoHandler = (id) => {
    if (window.confirm('해당 목록을 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({id}));
    }
  };

  return (
    <TodoContainer>
      <h2 className='todo-title'>📍 {inputTitle}</h2>
      <div className='todo-context'>{input}</div>
      <TodoListWarp>
        <Link to={`/${id}`}>
          <div>상세보기</div>
        </Link>
        <Buttons onDelete={deleteTodoHandler} id={id} type={'delete'} name={'삭제'} />
        <Buttons onToggle={toggleDoneHandler} id={id} type={'done'} name={isDone ? '취소' : '완료'} />
      </TodoListWarp>
    </TodoContainer>
  );
};

export default TodoItem;
