import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    return (
      <section className='category-item'>
        <button onClick={() => this.props.categoryDelete(this.props.category)}>X</button>

        <div>
          <p>name: {this.props.category.name}</p>
          <p>budget: {this.props.category.budget}</p>
        </div>

        <CategoryForm
          buttonText='update da cat'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
      </section>
    )
  }
}

export default CategoryItem;
