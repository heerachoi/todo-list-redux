import TodoItem from '../TodoItem/TodoItem';
import { TodoListWarp, ListTitle, TodoItemWrap } from './style';

// Todo 리스트
const TodoList = ({ todos, isDone }) => {
  return (
    <TodoListWarp>
      <ListTitle>{isDone ? '🎉 DONE 🎉' : '🔥 WORKING 🔥'}</ListTitle>
      <TodoItemWrap>
        {todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem key={item.id} id={item.id} inputTitle={item.inputTitle} input={item.input} isDone={item.isDone} />
          ))}
      </TodoItemWrap>
    </TodoListWarp>
  );
};

export default TodoList;
