import { expenseCreate, expenseUpdate, expenseDelete } from '../actions/expense-actions.js';

describe('Expense Actions', () => {
  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let {payload, type} = expenseCreate({ name: 'test name', budget: "1342" });
    expect(type).toEqual('EXPENSE_CREATE');
    expect(payload.id).toBeTruthy();
    expect(payload.timestamp).toBeTruthy();
    expect(payload.name).toBe('test name');
    expect(payload.budget).toBe("1342");
  });

  test('expenseDelete returns a EXPENSE_DELETE action', () => {
    let expense = { id: '01234', timestamp: new Date(), name: 'test name', budget: "1" };
    let action = expenseDelete(expense);
    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: expense
    });
  });

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let expense = { id: '01234', timestamp: new Date(), name: 'test name', budget: "1" };
    let action = expenseUpdate(expense);
    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: expense
    });
  });
});