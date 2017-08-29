import React from 'react';
import PropTypes from 'prop-types';
import CategoryForm from '../category-form/category-form.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.categoryDelete(this.props.category);
  }

  render() {
    return (
      <div className='category-item'>
        <h3>{this.props.category.name}</h3>
        <h4>{this.props.category.budget}</h4>
        <button onClick={this.handleSubmit}>Delete</button>
        <CategoryForm 
          buttonText='update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate} />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  categoryUpdate: PropTypes.func,
  categoryDelete: PropTypes.func,
};

export default CategoryItem;

