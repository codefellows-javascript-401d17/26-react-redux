import React from 'react';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import CategoryForm from '../category-form/'
import {connect} from 'react-redux';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('mounted');
    console.log('state in dashboardcontainer', this.state)
    console.log('props in dashboardcontainer, want categoryCreate to be here', this.props);
  }

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <CategoryForm onComplete={this.props.categoryCreate}/>
        {console.log('categories in dashboard', this.props.categories)}
        {/* {this.props.categories.map((item) => {
          <h4>item.title</h4>
        })} */}

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