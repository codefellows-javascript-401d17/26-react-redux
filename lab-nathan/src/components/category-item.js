import './category-item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './category-form.js';
import ExpenseForm from './expense-form.js';
import ExpenseItem from './expense-item.js';
import { connect } from 'react-redux';

import {
  expenseCreate,
} from '../actions/expense-actions.js';

import {
  categoryUpdate,
  categoryDelete
} from '../actions/category-actions.js';

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
    let {category, expenses} = this.props;
    let categoryExpenses = expenses[category.id];
    let amountSpent = 0;

    for (let expense of categoryExpenses) {
      amountSpent += expense.price;
    }

    let overBudget = amountSpent > category.budget;
    return (
      <div className='category-item'>
        <div className='category-header'>
          <span className='category-header-left'>
            <span className='category-title'>{category.name}</span>
            <span className={overBudget ? 'negative' : 'positive'}>${category.budget - amountSpent}</span>
          </span>
          <button>&#9998;</button>
          <button onClick={this.handleSubmit}>&#10006;</button>
        </div>
        
        
        
        <CategoryForm 
          buttonText='Update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate} />
        <ExpenseForm
          buttonText='Add'
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

