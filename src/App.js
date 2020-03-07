import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar/Navbar'
import './App.css';

// Importing Components

import { Home } from './Components/Home/Home'
import { ConsultDoc } from './Components/ConsultDoc/ConsultDoc';
import Footer from './Components/layout/Footer/Footer';
import Chat from './Components/Chat/Chat';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/home" component={ Home }></Route>
            <Route exact path="/consultadoc" component={ ConsultDoc }></Route>
            <Route exact path="/chat" component={ Chat }></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
