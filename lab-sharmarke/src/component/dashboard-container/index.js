import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDestory
} from '../../action/category-action.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Budget Tracker</h2>

        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item =>
          <CategoryItem
            key={item.id}
            categoryUpdate={this.props.categoryUpdate}
            categoryDestroy={this.props.categoryDestroy}
            category={item}
          /> )
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
