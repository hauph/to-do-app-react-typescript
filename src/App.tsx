import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import DonePage from './components/DonePage/DonePage';
import DeletedPage from './components/DeletedPage/DeletedPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonGroup>
          <Button variant="primary"><Link to="/">To-do List</Link></Button>
          <Button variant="success"><Link to="/done">Done List</Link></Button>
          <Button variant="danger"><Link to="/deleted">Deleted List</Link></Button>
        </ButtonGroup>
        
        <Switch>
          <Route path="/deleted">
            <DeletedPage />
          </Route>
          <Route path="/done">
            <DonePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
