import React from 'react';
import {connect} from 'react-redux';

import {expenseCreate as expenseActionCreate} from '../../action/expense-actions.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class CategoryItem extends React.Component {
  render() {
    let categoryID = this.props.category.id;

    return (
      <section className='category-item'>
        <button onClick={() => this.props.categoryDelete(this.props.category)}>X</button>

        <div>
          <h2>{this.props.category.name}</h2>
          <p>budget: {this.props.category.budget}</p>
        </div>

        <CategoryForm
          buttonText='update'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />


        <ExpenseForm
          buttonText='add'
          onComplete={this.props.expenseCreate}
          category={this.props.category}
        />

        {this.props.expenses ? this.props.expenses[categoryID].map(item =>
          <ExpenseItem key={item.id} expense={item} />
        ) : <p>add an expense</p>}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
