import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import {categoryUpdate, categoryDestroy} from '../../action/category-actions.js';
import {expenseCreate} from '../../action/expense-actions.js';


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDestroy} = this.props;
    console.log(this.props);

    return (
      <section className='category-item'>
        <div>
          <div className='category-content'>
            <h2>{category.name}</h2>
            <h3>{category.budget}</h3>
            <button onClick={() => categoryDestroy(category)}>Destroy</button>
          </div>
          <div className='category-editing'>
            <CategoryForm
              buttonText='update category'
              category={category}
              onComplete={categoryUpdate}
            />

            <ExpenseForm
              buttonText='create expense'
              onComplete={this.props.expenseCreate}
              category={category}
            />


          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
