import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxReporter from '../../lib/redux-reporter.js';
import reducers from '../../reducers/reducers.js';
import Dashboard from '../dashboard/dashboard.js';

const store = createStore(reducers, applyMiddleware(reduxReporter));

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });

    store.dispatch({ type: null });
  }

  render() {
    return (
      <Provider store={store}>
        <section>
          <BrowserRouter>
            <Route exact path='/' component={Dashboard} />
          </BrowserRouter>
        </section>
      </Provider>
    );
  }
}

export default App;