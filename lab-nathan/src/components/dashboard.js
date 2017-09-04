import './dashboard.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryItem from './category-item.js';
import CategoryForm from './category-form.js';
import ReorderableList from './reorderable-list.js';
import { categoryCreate, categoryMove } from '../actions/category-actions.js';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.requestReorder = this.requestReorder.bind(this);
  }

  requestReorder(fromIndex, toIndex) {
    this.props.categoryMove(this.props.categories[fromIndex], toIndex);
  }

  render() {
    return (
      <main className='dashboard'>
        <CategoryForm
          buttonText='Add'
          onComplete={this.props.categoryCreate}
        />
        <ReorderableList className='category-container' requestReorder={this.requestReorder}>
          {this.props.categories.map((item, index) =>
            <CategoryItem 
              key={index} 
              category={item} />
          )}
        </ReorderableList>
      </main>
    );
  }
}

DashboardContainer.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
  categoryMove: PropTypes.func
};

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryMove: (category, newIndex) => dispatch(categoryMove(category, newIndex)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);