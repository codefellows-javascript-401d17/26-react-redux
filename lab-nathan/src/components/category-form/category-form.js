import React from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='category-form'>
        <input
          name='name'
          type='text'
          placeholder='name' />
        <input
          name='budget'
          type='number'
          placeholder='budget' />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  buttonText: PropTypes.string,
};

export default CategoryForm;