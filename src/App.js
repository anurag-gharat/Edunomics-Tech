import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import './App.css';

function App() {
  return (
    
 
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
