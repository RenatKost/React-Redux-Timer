import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import new components
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

const store = createStore(reducers);

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <h1>TMRZ</h1>
          {/* Display the new components */}
          <NewTimer />
          <ListTimers />
        </div>
      </Provider>
    </div>
  );
}

export default App;
