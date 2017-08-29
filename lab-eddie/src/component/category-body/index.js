import React from 'react';

class CategoryBody extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.removeCat(this.props.category)
  }

  render() {
    return(
      <div>
        <h3>{this.props.category.title}</h3>
        <p>{`Budget: ${this.props.category.budget}`}</p>
        <button onClick={this.onClick}>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default CategoryBody;
