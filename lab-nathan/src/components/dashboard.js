import './dashboard.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryItem from './category-item.js';
import CategoryForm from './category-form.js';
import { categoryCreate } from '../actions/category-actions.js';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard'>
        <CategoryForm
          buttonText='Add'
          onComplete={this.props.categoryCreate}
        />
        <div className='category-container'>
          {this.props.categories.map((item, index) =>
            <CategoryItem 
              key={index} 
              category={item} />
          )}
        </div>
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