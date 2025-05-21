import {Switch, Link, Route} from 'react-router-dom';
import Page from './Page.js';
import Login from './Login.js';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/page">Page</Link>
        </nav>
      </header>
      <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/page">
        <Page />
      </Route>
      </Switch>  
    </>
  )
}
