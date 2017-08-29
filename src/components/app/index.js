import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardContainer from '../dashboard-container/'
import createAppStore from '../../lib/store.js';

const store = createAppStore();
console.log('store', store);

class App extends React.Component {

  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}
export default App;
