
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/Home';
import login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
