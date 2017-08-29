import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  constructor(props){
  super(props)
  console.log('hello there!!!', this.props.categoryDelete );
}
  render() {
    return (
      <section className='category-item'>
        <ul>
          {this.props.categories.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.categoryDelete(item)}>DELETE</button>

              <div>
                <p>name: {item.name}</p>
                <p>budget: {item.budget}</p>
              </div>

              <CategoryForm
                category={item}
                submitTitle='update category'
                buttonText='update category'
                handleSubmit={(category) => {
                  category.id = item.id;
                  this.props.categoryUpdate(category);
                }}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default CategoryItem;
