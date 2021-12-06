import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './state/store';
import Routing from './router/Routing';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing/>
      </div>
    </Provider>
    
  );
}

export default App;
