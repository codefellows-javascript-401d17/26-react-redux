import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='category-item'>
        <h3>{this.props.category.name}</h3>
        <h4>{this.props.category.budget}</h4>
        <button type='submit'>Delete</button>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
};

export default CategoryItem;

