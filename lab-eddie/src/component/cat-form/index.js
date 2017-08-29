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
    let tempCat = Object.assign({}, this.state);
    tempCat.budget = parseInt(tempCat.budget);
    if(this.props.category) tempCat.id = this.props.category.id;
    this.props.onComplete(tempCat);
  }

  render() {
    let cat = this.props.category;
    return (
      <form onSubmit={this.onSubmit} className='cat-form'>
        <input
          type='text'
          name='title'
          required={true}
          onChange={this.onChange}
          value={this.state.title}
          placeholder={cat ? cat.title :'Enter Category'}
        />
        <input
          type='number'
          name='budget'
          required={true}
          onChange={this.onChange}
          value={this.state.budget}
          placeholder={cat ? cat.budget :'Enter Buudget'}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
