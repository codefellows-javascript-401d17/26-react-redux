import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    return (
      <section className='category-item'>
        <button onClick={() => this.props.categoryDelete(this.props.category)}>X</button>

        <div>
          <span>name: {this.props.category.name}</span>
          <span>budget: {this.props.category.budget}</span>
        </div>

        <CategoryForm
          buttonText='Update the category'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
      </section>
    )
  }
}

export default CategoryItem;
