import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
