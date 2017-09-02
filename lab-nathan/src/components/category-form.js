import React from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBudgetChange(e) {
    this.setState({ budget: Number(e.target.value) });
  }

  handleSubmit(e) {
    e.preventDefault();

    let category = Object.assign({}, this.state);

    if (this.props.category) {
      category.id = this.props.category.id;
      category.timestamp = this.props.category.timestamp;
    }

    this.props.onComplete(category);
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='category'
          onChange={this.handleNameChange} />
        <input
          name='budget'
          type='number'
          placeholder='budget'
          onChange={this.handleBudgetChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  buttonText: PropTypes.string,
  onComplete: PropTypes.func,
  category: PropTypes.object
};

export default CategoryForm;