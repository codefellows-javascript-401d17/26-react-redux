import { validateCategory, validateExpense } from '../lib/validators.js';

const expenseReducer = function(expenses = {}, action) {
  let { type, payload } = action;
  
  switch (type) {
    case 'CATEGORY_CREATE': {
      validateCategory(action.payload);
      return {...expenses, [payload.id]: []};
    }
    case 'CATEGORY_DELETE': {
      validateCategory(action.payload);
      let newExpenses = { ...expenses };
      delete newExpenses[payload.id];
      return newExpenses;
    }
    case 'EXPENSE_CREATE': {
      validateExpense(action.payload);
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return { ...expenses, [categoryId]: [...categoryExpenses, payload] };
    }
    case 'EXPENSE_UPDATE': {
      validateExpense(action.payload);      
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return {...expenses, [categoryId]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense) };
    }
    case 'EXPENSE_DELETE': {
      validateExpense(action.payload);      
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return {...expenses, [categoryId]: categoryExpenses.filter(expense => expense.id !== payload.id) };
    }
    default:
      return expenses;
  }
}

export default expenseReducer;