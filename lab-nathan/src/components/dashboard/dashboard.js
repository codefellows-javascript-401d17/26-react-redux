import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.js';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions.js';

import CategoryForm from '../category-form/category-form.js';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item, index) =>
          <CategoryItem 
            key={index} 
            category={item} 
            categoryDelete={this.props.categoryDelete} 
            categoryUpdate={this.props.categoryUpdate} />
        )}
      </main>
    );
  }
}

DashboardContainer.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
  categoryUpdate: PropTypes.func,
  categoryDelete: PropTypes.func,
};

const mapStateToProps = (state) => ({
  categories: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);