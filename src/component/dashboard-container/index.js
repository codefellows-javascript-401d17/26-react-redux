import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText='create budget category'
          onComplete={this.props.categoryCreate}
          />

        {this.props.categories.map((item) =>
            <div key={item.id}>
              <h2>{item.name}</h2>
              <CategoryForm
                buttonText='update'
                category={item}
                onComplete={this.props.categoryUpdate} />

              <button onClick={() => this.props.categoryDelete(item)}>X</button>
            </div>
          )}
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
    categoryDelete:(category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);