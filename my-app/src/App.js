import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TMRZ</h1>
        <NewTimer />
        <ListTimers />
      </div>
    </Provider>
  );
}

export default App;
