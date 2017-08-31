import React from 'react';
import PropTypes from 'prop-types';
import CategoryForm from '../category-form/category-form.js';
import ExpenseForm from '../expense-form/expense-form.js';
import ExpenseItem from '../expense-item/expense-item.js';
import { connect } from 'react-redux';

import {
  expenseCreate,
} from '../../actions/expense-actions.js';

import {
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.categoryDelete(this.props.category);
  }

  render() {
    let categoryExpenses = this.props.expenses[this.props.category.id];
    let amountSpent = categoryExpenses.length > 0 ? categoryExpenses.reduce((acc, cur) => acc += cur.price, 0) : 0;
    return (
      <div className='category-item'>
        <h2>Category: {this.props.category.name}</h2>
        <h4>Budget: {this.props.category.budget - amountSpent}</h4>
        <button onClick={this.handleSubmit}>Delete</button>
        <CategoryForm 
          buttonText='update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate} />
        <ExpenseForm
          buttonText='create expense'
          categoryId={this.props.category.id}
          onComplete={this.props.expenseCreate}
        />

        {this.props.expenses[this.props.category.id].map((expense) =>
          <ExpenseItem 
            key={expense.id} 
            expense={expense} />
        )}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  categoryUpdate: PropTypes.func,
  categoryDelete: PropTypes.func,
  expenseCreate: PropTypes.func,
  expenses: PropTypes.object
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (category) => dispatch(expenseCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

