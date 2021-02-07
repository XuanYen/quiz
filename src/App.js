import logo from './logo.svg';
import { Provider } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import configStore from './reducers/index.js';
 
import './App.css';
const store=configStore();
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
