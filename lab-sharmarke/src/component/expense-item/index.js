import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    console.log('props:', this.props);
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <section className='expense-item'>
        <div>
          <div className='content'>
            <h3>{expense.name}</h3>
            <p>price: {expense.price}</p>
            <button onClick={() => expenseDelete(expense)}>x</button>
          </div>
          <div className='editing'>
            <ExpenseForm
              buttonText='update'
              onComplete={expenseUpdate}
              expense={expense}
            />
          </div>
        </div>
      </section>
    )
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
