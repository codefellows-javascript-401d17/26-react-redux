import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../cat-form';
import CategoryBody from '../category-body';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-action.js'

class Dashboard extends React.Component {
  render() {
    return (
      <main className='dashboard'>
        <h1>{'Eddie\'s Kick Ass Dashboard :D'}</h1>
        <CategoryForm
          onComplete={this.props.categoryCreate}
          buttonText='Add Category'
        />
        <ul>
          {this.props.categories.map(cat => {
            return (
              <li key={cat.id}>
                <CategoryBody
                  removeCat={this.props.categoryDelete}
                  buttonText='Remove'
                  category={cat}
                />
                <CategoryForm
                  category={cat}
                  onComplete={this.props.categoryUpdate}
                  buttonText='Update'
                />
              </li>
            );
          })}
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
  return{
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
