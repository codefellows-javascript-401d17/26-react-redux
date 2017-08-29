import React from 'react';
import CategoryForm from '../category-form/'


class CategoryItem extends React.Component {
  render() {
    console.log('inside item', this.props);
    return (
      <li key={this.props.category.id}>
        <button onClick={() => {
          return this.props.categoryDelete(this.props.category)
        }}>X</button> 
        <h4>name: {this.props.category.name}</h4>
        <p>budget: {this.props.category.budget}</p>

        <CategoryForm
        buttonText='Update'
        onComplete={this.props.categoryUpdate}
        category={this.props.category}
      />
      </li>


    )
  }
}

export default CategoryItem;