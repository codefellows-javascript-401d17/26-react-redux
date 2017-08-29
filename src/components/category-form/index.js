import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    console.log('clicked submit!');
    e.preventDefault();

  }

  render() {
    return (
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
    )

  }
}

export default CategoryForm;