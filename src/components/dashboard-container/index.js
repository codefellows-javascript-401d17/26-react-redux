import React from 'react';
import ReactDOM from 'react-dom';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import CategoryForm from '../category-form/'
import { connect } from 'react-redux';
import CategoryItem from '../../components/category-item'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <CategoryForm buttonText='Create' onComplete={this.props.categoryCreate} />
        {this.props.categories.map((category) => {
          return (
            <CategoryItem categoryDelete={this.props.categoryDelete} categoryUpdate={this.props.categoryUpdate} category={category} />
          )
        })}

      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return (
    { categories: state }
  )
}

const mapDispatchToProps = (dispatch, getState) => {
  return (
    {
      categoryCreate: (category) => { return dispatch(categoryCreate(category)) },
      categoryUpdate: (category) => { return dispatch(categoryUpdate(category)) },
      categoryDelete: (category) => { return dispatch(categoryDelete(category)) }
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);