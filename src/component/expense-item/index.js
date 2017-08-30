import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <section className='expense-item'>
        <div>
          <div className='expense-content'>
            <h4>{expense.name}</h4>
            <h4>{expense.price}</h4>
            <button onClick={() => expenseDelete(category)}>X</button>
          </div>
          <div className='expense-editing'>
            <ExpenseForm
              buttonText='update expense'
              expense={expense}
              onComplete={expenseUpdate}
            />
          </div>
        </div>
      </section>
    )
  }
}

let mapStateToProps = () =>({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
