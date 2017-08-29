import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from '../../lib/store.js';
import Dashboard from '../dashboard';

let store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState())
    });
  };

  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={Dashboard} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
