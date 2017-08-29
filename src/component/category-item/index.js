import React from 'react';
import CategoryForm from '../category-form';
import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/category-actions.js';


class CategoryItem extends React.Component {
  render() {
    return(
      <li>
        <h2>{this.props.category.title}</h2>
        <h3>{this.props.category.budget}</h3>
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
        <CategoryForm
          category={this.props.category}
          buttonText='Update Category'
          onComplete={this.props.categoryUpdate}
          />
      </li>
    )
  }

}

export default CategoryItem
