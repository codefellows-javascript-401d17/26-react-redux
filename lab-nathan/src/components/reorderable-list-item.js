import React from 'react';
import PropTypes from 'prop-types';

class ReorderableListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag() {
    this.props.requestReorder(this.props.index);
  }

  handleDragOver() {
    this.props.reorderTo(this.props.index);
  }

  handleDrop() {
    this.props.requestReorder();
  }

  render() {
    return (
      <div 
        className='reorderable-list-item' 
        draggable='true' 
        onDrag={this.handleDrag}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}>
        {this.props.children}
      </div>
    );
  }
}

ReorderableListItem.propTypes = {
  children: PropTypes.object,
  index: PropTypes.number,
  requestReorder: PropTypes.func,
  reorderTo: PropTypes.func
};

export default ReorderableListItem;
