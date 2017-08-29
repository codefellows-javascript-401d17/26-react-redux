import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.category ? props.category.id : '',
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleBudgetChange(e) {
    this.setState({
      budget: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleNameChange}
          />

        <input
          name='budget'
          type='number'
          placeholder='$0.00'
          value={this.state.budget}
          onChange={this.handleBudgetChange}
          />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;