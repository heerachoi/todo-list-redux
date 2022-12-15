import {createStore, combineReducers} from 'redux';
import todoApp from '../modules/todos';

const rootReducer = combineReducers({
  todoApp,
});

const store = createStore(rootReducer);

export default store;
