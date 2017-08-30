import expenseReducer from '../reducers/expense-reducer.js';

describe('Expense Reducer', () => {
  test('initialState should be an empty object', () => {
    let result = expenseReducer(undefined, { type: null });
    expect(result).toEqual({});
  });

  test('if no action type is presented, the state should be returned', () => {
    let state = {
      0: [{ id: 'someid', title: 'some title', }],
      1: [{ id: 'anotherid', title: 'another title' }]
    };
    let result = expenseReducer(state, { type: null });
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should create an empty array at the supplied category id', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: { name: 'sample payload', id: "1" }
    };

    let result = expenseReducer({}, action);
    expect(result[1]).toEqual([]);
  });

  test('CATEGORY_DELETE should delete the array with the supplied category id', () => {
    let action = {
      type: 'CATEGORY_DELETE',
      payload: { name: 'sample payload', id: "1" }
    };

    let result = expenseReducer({ 1: [ { id: 'someid', categoryId: '1', title: 'another title' } ] }, action);
    expect(result).toEqual({});
  });

  test('EXPENSE_CREATE should append a expense to the categories array', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: { id: 'someid', categoryId: '1', title: 'another title' }
    };

    let result = expenseReducer({ 1: [] }, action);
    expect(result[1].length).toBe(1);
    expect(result[1][0]).toBe(action.payload);
  });

  test('EXPENSE_UPDATE should update a expense', () => {
    let action = {
      type: 'EXPENSE_UPDATE',
      payload: { id: 'someid', categoryId: '1', title: 'updated title' }
    };

    let result = expenseReducer({ 
      1: [ { id: 'someid', categoryId: '1', title: 'another title' }, { id: 'someid2', categoryId: '1', title: 'another title2' } ], 
      2: [ { id: 'someid', categoryId: '2', title: 'another title' }, { id: 'someid2', categoryId: '2', title: 'another title2' } ] 
    }, action);

    expect(result[1][0]).toBe(action.payload);
  });

  test('EXPENSE_DELETE should delete a expense', () => {
    let action = {
      type: 'EXPENSE_DELETE',
      payload: { id: 'someid', categoryId: '1', title: 'updated title' }
    };

    let result = expenseReducer({ 1: [ { id: 'someid', categoryId: '1', title: 'another title' } ] }, action);
    expect(result[1].length).toBe(0);
  });
});