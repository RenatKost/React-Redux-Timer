import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import NewTimer from './components/NewTimer';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <h1>TMRZ</h1>
      <NewTimer />
    </Provider>
  );
}

export default App;
