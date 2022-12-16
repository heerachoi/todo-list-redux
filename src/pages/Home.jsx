import { useSelector } from 'react-redux';

import { Container } from './style.js';
import Header from '../component/Header/Header';
import Form from '../component/Form/Form';
import TodoList from '../component/TodoList/TodoList';

const Home = () => {
  // 투두리스트
  const todos = useSelector((state) => state.todoApp);

  return (
    <Container>
      <Header />
      <Form />
      <TodoList todos={todos} isDone={false} />
      <TodoList todos={todos} isDone={true} />
    </Container>
  );
};

export default Home;
