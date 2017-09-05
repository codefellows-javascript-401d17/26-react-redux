import React from 'react';
import PropTypes from 'prop-types';

class ItemHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.itemDelete();
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.itemUpdate();
  }

  render() {
    return (
      <div className='item-header'>
        <span className='item-header-left'>
          {this.props.children}
        </span>
        <button onClick={this.handleUpdate}>&#9998;</button>
        <button onClick={this.handleDelete}>&#10006;</button>
      </div>
    );
  }
}

ItemHeader.propTypes = {
  children: PropTypes.array,
  itemUpdate: PropTypes.func,
  itemDelete: PropTypes.func,  
};

export default ItemHeader;

