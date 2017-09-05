import './expense-item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './expense-form.js';
import ItemHeader from './item-header.js';
import { connect } from 'react-redux';

import {
  expenseUpdate,
  expenseDelete
} from '../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdate: false
    }
  }

  render() {
    return (
      <div className='expense-item'>
        <ItemHeader itemDelete={() => this.props.expenseDelete(this.props.expense)} itemUpdate={() => this.setState({ showUpdate: !this.state.showUpdate })}>
          <span className='expense-title'>{this.props.expense.name}</span>
          <span className='negative'>${this.props.expense.price}</span>
        </ItemHeader>

        {this.state.showUpdate 
          ? 
          <ExpenseForm 
            buttonText='Update'
            expense={this.props.expense}
            onComplete={expense => {
              this.setState({ showUpdate: false });
              return this.props.expenseUpdate(expense);
            }} /> 
          : 
          null
        }
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

