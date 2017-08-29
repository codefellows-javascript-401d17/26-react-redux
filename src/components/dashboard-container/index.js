import React from 'react';

class DashboardContainer extends React.Component {


  render() {


    return (
      <section>
        <h2>Dashboard</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            placeholder='enter a category name'
          />
          <input
            type='text'
            name='budget'
            onChange={this.handleChange}
            placeholder='enter a budget for this category'
          />
          <button type='submit'>Submit</button>
        </form>
      </section>

    )
  }
}

export default DashboardContainer;