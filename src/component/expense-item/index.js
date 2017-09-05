import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {category, expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <li className='expense-item'>
        <div>
          <div className='expense-content'>
            <p>{expense.name}</p>
            <p>{expense.price}</p>
            <button className='remove' onClick={() => expenseDelete(expense)}>X</button>
          </div>
          <div className='expense-editing'>
            <ExpenseForm
              category={category}
              expense={expense}
              buttonText='update expense'
              onComplete={expenseUpdate}
            />
          </div>
        </div>
      </li>
    )
  }
}

let mapStateToProps = () =>({});

let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
