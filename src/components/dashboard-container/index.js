import React from 'react';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions.js';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('state in dashboardcontainer', this.state)
    console.log('props in dashboardcontainer', this.props);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('event target is', e.target);
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  // componentDidMount() {
  //   categoryCreate({ name: 'rent', budget: 800 });
  //   categoryCreate({ name: 'pizza', budget: 500 });
  // }

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='enter a category name'
          />
          <input
            id='budgetField'
            type='text'
            name='budget'
            value={this.state.budget}
            onChange={this.handleChange}
            placeholder='enter a budget for this category'
          />
          <button type='submit'>Submit</button>
        </form>
      </section>

    )
  }
}

export default DashboardContainer;