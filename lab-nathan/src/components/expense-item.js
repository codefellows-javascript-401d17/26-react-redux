import './expense-item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './expense-form.js';
import { connect } from 'react-redux';

import {
  expenseUpdate,
  expenseDelete
} from '../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.expenseDelete(this.props.expense);
  }

  render() {
    return (
      <div className='expense-item'>
        <h3>Name: {this.props.expense.name}</h3>
        <h4>Price: {this.props.expense.price}</h4>
        <button onClick={this.handleSubmit}>Delete</button>
        <ExpenseForm 
          buttonText='update'
          expense={this.props.expense}
          onComplete={this.props.expenseUpdate} />
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseUpdate: PropTypes.func,
  expenseDelete: PropTypes.func
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
    expenseDelete: (expense) => dispatch(expenseDelete(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);

