import categoryReducer from '../reducer/category.js';

describe('Category Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null});
    expect(result).toEqual([]);
  });

  test('if no action type is presented, the state should be returned', () => {
    let state = [
      {id:'someid', name: 'some name'},
      {id: 'anotherid', name: 'another name'}
    ]

    let result = categoryReducer(state, {type: null});
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'sample payload'
    }

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });

  test('CATEGORY_UPDATE should update a category with new information', () => {
    let action = {
      type: 'CATEGORY_UPDATE',
      payload: 'sample payload'
    }

    let result = categoryReducer([...state], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });
});
