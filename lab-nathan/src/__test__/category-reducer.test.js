import categoryReducer from '../reducers/category-reducer.js';

describe('Category Reducer', () => {
  test('initialState should be an empty array', () => {
    let result = categoryReducer(undefined, { type: null });
    expect(result).toEqual([]);
  });

  test('if no action type is presented, the state should be returned', () => {
    let state = [
      { id: 'someid', title: 'some title', },
      { id: 'anotherid', title: 'another title' }
    ];
    let result = categoryReducer(state, { type: null });
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'sample payload'
    };

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });

  test('CATEGORY_UPDATE should update a category', () => {
    let createAction = {
      type: 'CATEGORY_CREATE',
      payload: { name: 'sample payload', id: "1" }
    };

    let createResult = categoryReducer([], createAction);

    let createAction2 = {
      type: 'CATEGORY_CREATE',
      payload: { name: 'sample payload 2', id: "2" }
    };

    let createResult2 = categoryReducer(createResult, createAction2);

    let updateAction = {
      type: 'CATEGORY_UPDATE',
      payload: { name: 'updated payload', id: "1" }
    };

    let updateResult = categoryReducer(createResult2, updateAction);

    expect(updateResult[0]).toBe(updateAction.payload);
  });

  test('CATEGORY_DELETE should delete a category', () => {
    let createAction = {
      type: 'CATEGORY_CREATE',
      payload: { name: 'sample payload', id: "1" }
    };

    let createResult = categoryReducer([], createAction);

    let deleteAction = {
      type: 'CATEGORY_DELETE',
      payload: { name: 'sample payload', id: "1" }
    };

    let deleteResult = categoryReducer(createResult, deleteAction);

    expect(deleteResult.length).toBe(0);
  });
});