import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item'
import {categoryUpdate, categoryDestroy} from '../../action/category-action.js';
import {expenseCreate} from '../../action/expense-actions.js';


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDestroy, expenses} = this.props;

    return (
      <section className='category-item'>
        <div className='category container'>
          <div className='category-content'>
            <h2>{category.name}</h2>
            <h3>{category.budget}</h3>
            <button onClick={() => categoryDestroy(category)}>DELETE</button>
          </div>
          <div className='category-editing'>
            <CategoryForm
              buttonText='update category'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
        </div>

        <div className='expense-container'>
          <ExpenseForm
            category={category}
            buttonText='create expense'
            onComplete={this.props.expenseCreate}
          />

          <ul className='expense-items'>
            {expenses.map(expense =>
              <ExpenseItem key={expense.id} expense={expense} category={category} />
            )}
          </ul>
        </div>
      </section>
    )
  }
}

let mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id]
});


let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
