import {categoryCreate, categoryUpdate, categoryDelete} from '../action/category-actions.js';

describe('Category Actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({name: 'test name'});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('test name');
  });

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let category = {id: '9876', timestamp: new Date(), name: 'test name'};
    let action = categoryDelete(category);
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: category
    })
  });

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let category = {id: '9876', timestamp: new Date(), name: 'test name'};
    let action = categoryUpdate(category);
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: category
    });
  });
});
