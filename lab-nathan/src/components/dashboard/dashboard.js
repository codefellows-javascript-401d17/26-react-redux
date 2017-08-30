import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.js';

import { categoryCreate } from '../../actions/category-actions.js';

import CategoryForm from '../category-form/category-form.js';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h1>Dashboard</h1>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item, index) =>
          <CategoryItem 
            key={index} 
            category={item} />
        )}
      </main>
    );
  }
}

DashboardContainer.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func
};

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);