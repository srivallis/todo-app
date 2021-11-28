import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact={true}><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
