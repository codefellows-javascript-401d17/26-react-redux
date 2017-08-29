import React from 'react';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';
import CategoryForm from '../category-form/'

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
        <CategoryForm />
        {/* {this.props.categories.map((item) => {
          <h4>item.title</h4>
        })} */}

      </section>

    )
  }
}

export default DashboardContainer;