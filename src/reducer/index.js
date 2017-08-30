import {combineReducers} from 'redux';
import categoriesReducer from './category.js';
import expensesReducer from './expenses.js';

export default combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer
});
