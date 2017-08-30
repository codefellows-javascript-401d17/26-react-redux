import React from 'react';
import uuid from 'uuid';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0,
      id: props.category ? props.category.id : uuid.v1()
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillRecieveProps(props) {
    if (props.category) {
      this.setState(props.category);
    }
  }

  handleChange(e) {
    let { name, value, type } = e.target;

    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch(err) {
        console.log(err);
      }
    } else {
      this.setState({
        [name]: value
      })
    }
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
          onChange={this.handleChange}
        />

        <input
          name='budget'
          type='number'
          placeholder='enter a number'
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
