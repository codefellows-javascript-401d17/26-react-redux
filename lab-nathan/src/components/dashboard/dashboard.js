import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form.js';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText='create category'
        />
      </main>
    );
  }
}

export default DashboardContainer;