import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import { update } from './actions';

const store = createStore(reducers);

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 50);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Create a Timer Name</h1>
        <NewTimer />
        <ListTimers />
        <h1 className="Created">
          Created by{' '}
          <a href="linkedin.com/in/renat-kostiakov-2456241a8">
            Renat Kostiakov
          </a>
        </h1>
      </div>
    </Provider>
  );
}

export default App;
