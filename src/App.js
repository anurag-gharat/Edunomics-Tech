import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css/dist/js/materialize.min.js";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import './App.css';
import About from './Pages/About';
import Team from './Pages/Team';
import Solutions from './Pages/Solutions';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';


function App() {

  useEffect(()=>{
    M.AutoInit()
  },[])



  return (
    
 
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus"  component={About} />
          <Route path="/ourteam"  component={Team} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/services" component={Services} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:blogId" component={SingleBlog} />
          <Route path="/contact" component={ContactUs} />


        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
