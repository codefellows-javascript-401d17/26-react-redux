import React from 'react';
import CategoryForm from '../category-form/'


class CategoryItem extends React.Component {

  render() {
    console.log('item props', this.props);
    return (
      <li key={this.props.category.id}>
      <button onClick={() => this.props.categoryDelete(this.props.category.id)}>X</button> 
              <h4>name: {this.props.category.name}</h4>
              <p>budget: {this.props.category.budget}</p>
      </li>

    )
  }
}

export default CategoryItem;