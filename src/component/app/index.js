import React from 'react';
import {Provider} from 'react-redux';
import {BroswerRouter} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container'

const store = createAppStore();

class App extends React.Component{
  componentDidMount(){
    store.subscribe(() => {
      console.log('--STATE--', store.getState())
    });

    store.dispatch({type: null});
  }

  render(){
    return(
      <section>
        <Provider>
          <BroswerRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BroswerRouter>
        </Provider>
      </section>
    )
  }
}

export default App;