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

  componentWillReceiveProps(props) {
    if (props.expense) {
      this.setState({...props.expense});
    }

    if (props.categoryID) {
      this.setState({categoryID: props.categoryID})
    }
  }

  handleChange(e) {
    let {name, value, type} = e.target;

    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.expense) {
      this.setState({name: ''});
    }
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
