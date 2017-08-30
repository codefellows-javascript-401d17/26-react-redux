const expenseReducer = function(expenses = {}, action) {
  let {type, payload} = action;
  
  switch (type) {
    case 'CATEGORY_CREATE':
      return {...expenses, [payload.id]: []};
    case 'CATEGORY_DELETE': {
      let newExpenses = {...expenses};
      delete newExpenses[payload.id];
      return newExpenses;
    }
    case 'EXPENSE_CREATE': {
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return {...expenses, [categoryId]: [...categoryExpenses, payload] };
    }
    case 'EXPENSE_UPDATE': {
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return {...expenses, [categoryId]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense) };
    }
    case 'EXPENSE_DELETE': {
      let { categoryId } = payload;
      let categoryExpenses = expenses[categoryId];     
      return {...expenses, [categoryId]: categoryExpenses.filter(expense => expense.id !== payload.id) };
    }
    default:
      return expenses;
  }
}

export default expenseReducer;