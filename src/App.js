import React from 'react';
import './App.css';
import Nav from './ui/Nav'
import Shop from './ui/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './ui/Home';
import ItemDetail from './ui/ItemDetail'

function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component = {Home} />
     <Route path="/shop" exact component={Shop} />
     <Route path="/shop/:id" component={ItemDetail} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
