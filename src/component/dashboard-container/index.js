import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate as categoryActionCreate} from '../../action/category-actions.js';
import {expenseCreate as expenseActionCreate} from '../../action/expense-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item}
          expenseCreate = {this.props.expenseCreate}
          expenses = {this.props.expenses}
          />
        )}


      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
