import {v4 as uuidv4} from 'uuid';

// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_DONE = 'TOGGLE_DONE';
const DELETE_TODO = 'DELETE_TODO';

// action creators
// 투두 추가
export const addTodo = (payload) => {
  return {type: ADD_TODO, payload};
};

// 투두 완료 여부
export const toggleDone = (payload) => {
  return {type: TOGGLE_DONE, payload};
};

// 투두 삭제
export const deleteTodo = (payload) => {
  return {type: DELETE_TODO, payload};
};

const initialState = [
  {
    id: uuidv4(),
    inputTitle: '알고리즘',
    input: '알고리즘 문제 풀기',
    isDone: false,
  },
  {
    id: uuidv4(),
    inputTitle: '리액트',
    input: 'Todo list 만들기',
    isDone: true,
  },
];

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    // 투두 추가
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          inputTitle: action.payload.inputTitle,
          input: action.payload.input,
          isDone: action.payload.isDone,
        },
      ];
    // 미완료/완료 토글
    case TOGGLE_DONE: {
      const newState = state.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      return newState;
    }

    // 투두 삭제
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};
export default todoApp;
