
import React from 'react';
import uuid from 'uuid';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: props.expense ? props.expense.id: uuid.v1(),
      timestamp: props.expense ? props.expense.timestamp: new Date(),
      name: props.expense ? props.expense.name: '',
      categoryID: props.category ? props.category.id: null,
      price: props.category ? props.category.budget: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name='price'
          type='number'
          placeholder='number'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;
