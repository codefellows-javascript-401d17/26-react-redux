import React from 'react';
import PropTypes from 'prop-types';
import ReorderableListItem from './reorderable-list-item.js';

class ReorderableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined,
    }

    this.requestReorder = this.requestReorder.bind(this);
    this.reorderTo = this.reorderTo.bind(this);
  }

  requestReorder(key) {
    this.setState({ selectedKey: key });
  }

  reorderTo(key) {
    if (this.state.selectedKey !== key) {
      this.props.requestReorder(this.state.selectedKey, key);
    }    
  }

  render() {
    let listItems = this.props.children.map((child, index) => {
      return (
        <ReorderableListItem 
        key={index}
        index={index}
        requestReorder={this.requestReorder}
        reorderTo={this.reorderTo}>

        {this.props.children[index]}

      </ReorderableListItem>
    )});

    return (
      <div className='item-header'>
        {listItems}
      </div>
    );
  }
}

ReorderableList.propTypes = {
  children: PropTypes.array,
  requestReorder: PropTypes.func
};

export default ReorderableList;

