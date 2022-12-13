import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Details.css';

const Details = (todos) => {
  const {id} = useParams();
  console.log(todos.todos);
  console.log(id);
  const todoList = todos.todos.filter((item) => item.id === id.toString());
  console.log(todoList);
  console.log(todoList[0]);
  return (
    <div className='wrapper'>
      <div className='details_container'>
        <div className='details_top'>
          <div>ID : {id}</div>
          <button className='return_button'>
            <NavLink to='/'>이전으로</NavLink>
          </button>
        </div>
        <div className='details_bottom'>
          <h2>{todoList[0].title}</h2>
          <p className='todo-context'>{todoList[0].context}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
