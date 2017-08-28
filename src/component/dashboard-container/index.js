import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render() {
    return(
      <main className="dashboard-container">
        <h1>Dashboard</h1>

        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate} />
        <ul className="categoryList">
          {this.props.categories.map((item, i) => {
            return (
              <CategoryItem key={i} category = {item}
                deleteNote = {this.props.categoryDelete}
                />
            )
          )}
        </ul>
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
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
