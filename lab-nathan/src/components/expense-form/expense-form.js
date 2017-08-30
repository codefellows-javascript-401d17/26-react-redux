import React from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
      categoryId: props.expense ? props.expense.categoryId : '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBudgetChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let expense = Object.assign({}, this.state);

    if (this.props.expense) {
      expense.id = this.props.expense.id;
      expense.timestamp = this.props.expense.timestamp;
      expense.categoryId = this.props.expense.categoryId;
    }
    else { 
      expense.categoryId = this.props.categoryId;
    }

    this.props.onComplete(expense);
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          onChange={this.handleNameChange} />
        <input
          name='price'
          type='number'
          placeholder='price'
          onChange={this.handleBudgetChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  buttonText: PropTypes.string,
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  categoryId: PropTypes.string
};

export default ExpenseForm;