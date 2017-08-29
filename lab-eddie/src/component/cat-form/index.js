import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title: '',
      budget: props.category ? props.category.budget: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.addCat(Object.assign({}, this.state));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='cat-form'>
        <input
          type='text'
          name='title'
          required={true}
          onChange={this.onChange}
          value={this.state.title}
          placeholder='Enter Category'
        />
        <input
          type='text'
          name='budget'
          required={true}
          onChange={this.onChange}
          value={this.state.budget}
          placeholder='Enter Budget'
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
