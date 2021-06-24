import './App.css';
import Home from './pages/Home';
import Occupations from './pages/Occupations';
import Characteristics from './pages/Characteristics';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Home}> 
        </Route>
        {/* <Route path="/about"> 
          <About/>
        </Route>
        <Route path="/methods"> 
          <Methods/>
        </Route> */}
        <Route path="/characteristics" component={Characteristics}>
        </Route>
        <Route path="/occupations" component={Occupations}> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
