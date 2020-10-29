import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Reports from './pages/Reports'
import Products from './pages/Products'
import  "./App.css"
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
