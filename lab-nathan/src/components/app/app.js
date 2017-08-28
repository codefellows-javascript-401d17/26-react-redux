import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Dashboard from '../dashboard/dashboard.js';

const store = createStore(reducer);

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