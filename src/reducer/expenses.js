let validateCategory = (category) => {
  if (!category.id || !category.name || !category.timestamp || !category.budget) {
    throw new Error('VALIDATION ERROR: category must include id, name, timestamp and budget')
  }
}

let validateExpense = (expense) => {
  if (!expense.id || !expense.name || !expense.categoryID) {
    throw new Error('VALIDATION ERROR: expense must include an id, name, and a categoryID')
  }
}

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryExpenses;

  switch(type) {
    case 'CATEGORY_CREATE':
      console.log('__STATE__!!', state);
      validateCategory(payload);
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      validateCategory(payload);
      return {...state, [payload.id] : undefined};
    case 'EXPENSE_CREATE':
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};
    case 'EXPENSE_UPDATE':
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];

      return {
        ...state,
        [categoryID]: categoryExpenses.map(expense => {
          console.log('LOGGING EXPENSE', expense);
          return expense.id === payload.id ? payload : expense;
        })
      }
    case 'EXPENSE_DELETE':
    console.log('LOGGING THE PAYLOAD', payload);
    console.log('LOGGING THE STATE', state);
    console.log('LOGGING CATEGORY ID', categoryID);
      validateExpense(payload);
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];

      return {
        ...state,
        [categoryID]: categoryExpenses.filter(expense => {
          return expense.id !== payload.id
        })
      }
    default:
      return state;
  }
}
