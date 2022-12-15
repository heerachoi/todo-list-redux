import './TodoList.css';
// import {NavLink} from 'react-router-dom';
import TodoItem from '../TodoItem/TodoItem';
import {TodoListWarp, TodoContainer} from './style';

// Todo 리스트
const TodoList = ({todos, isDone}) => {
  // 완료 버튼이 onClick되면 실행되는 부분
  // const handleComplete = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {...item, isDone: !item.isDone};
  //       }
  //       return item;
  //     })
  //   );
  // };

  // 삭제 버튼이 onClick되면 실행되는 부분
  // const handleDelete = ({id}) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // Todos와 Work는 false값을 받아오고 Done은 true값을 받아온다.
  // trueOrFalse의 상태에 따라 isDone을 확인해서 resultDone에 추가하여 배열을 return한다.

  // const checkDone = (todos, trueOrFalse) => {
  //   let resultDone = [];
  //   for (let todo of todos) {
  //     if (todo.isDone === trueOrFalse) {
  //       resultDone.push(
  //         <TodoContainer key={todo.id}>
  //           <NavLink to={`${todo.id}`}>상세보기</NavLink>
  //           <h2 className='todo-title'>📍{todo.title}</h2>
  //           <div className='todo-context'>{todo.context}</div>
  //           <div className='buttons'>
  //             <button className='button-delete button' onClick={() => handleDelete(todo)}>
  //               삭제하기
  //             </button>
  //             <button className='button-complete button' onClick={() => handleComplete(todo)}>
  //               {trueOrFalse ? '취소' : '완료'}
  //             </button>
  //           </div>
  //         </TodoContainer>
  //       );
  //     }
  //   }
  //   return resultDone;
  // };

  return (
    <TodoListWarp>
      <h2 className='list-title'>{isDone ? 'Done..!🎉' : 'Working..🔥'}</h2>
      <div>
        {todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem key={item.id} id={item.id} inputTitle={item.inputTitle} input={item.input} isDone={item.isDone} />
          ))}
      </div>
    </TodoListWarp>
  );
};

export default TodoList;
