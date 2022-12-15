import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import TodoDetails from '../component/Details/TopdoDetails';

const Details = () => {
  const todos = useSelector((state) => state.todoApp);
  const param = useParams();

  // id와 일치하는 투두 찾기
  const todo = todos.find((item) => item.id === param.id);
  return <TodoDetails id={todo.id} inputTitle={todo.inputTitle} input={todo.input} isDone={todo.isDone} />;
};

export default Details;
