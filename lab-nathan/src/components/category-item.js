import './category-item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './category-form.js';
import ExpenseForm from './expense-form.js';
import ExpenseItem from './expense-item.js';
import ItemHeader from './item-header.js';
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

    this.state = {
      showUpdate: false
    }
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
        <ItemHeader itemDelete={() => this.props.categoryDelete(category)} itemUpdate={() => this.setState({ showUpdate: !this.state.showUpdate })}>
          <span className='category-title'>{category.name}</span>
          <span className={overBudget ? 'negative' : 'positive'}>${category.budget - amountSpent}</span>
        </ItemHeader>

        {this.state.showUpdate 
          ? 
          <CategoryForm 
            buttonText='Update'
            category={this.props.category}
            onComplete={category => {
              this.setState({ showUpdate: false });
              return this.props.categoryUpdate(category);
            }} /> 
          : 
          null
        }
        
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
  expenses: state.expenses,
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (category) => dispatch(expenseCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

