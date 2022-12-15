import {useNavigate} from 'react-router-dom';

import './Details.css';

const TodoDetails = ({id, inputTitle, input, isDone}) => {
  const navigate = useNavigate();

  // 이전 페이지 이동 핸들러
  const previousPageHanlder = () => {
    navigate(-1, true);
  };

  return (
    <div className='wrapper'>
      <div className='details_container'>
        <div className='details_top'>
          <div>ID : {id}</div>
          <button onClick={previousPageHanlder} className='return_button' />
        </div>
        <div className='details_bottom'>
          <h2>{inputTitle}</h2>
          <p className='todo-context'>{input}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;

// <div className='wrapper'>
//   <div className='details_container'>
//     <div className='details_top'>
//       <div>ID : {id}</div>
//       <button className='return_button'>
//         <NavLink to='/'>이전으로</NavLink>
//       </button>
//     </div>
//     <div className='details_bottom'>
//       <h2>{todoList[0].inputTitle}</h2>
//       <p className='todo-context'>{todoList[0].input}</p>
//     </div>
//   </div>
// </div>;
