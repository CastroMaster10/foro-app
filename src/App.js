import React from 'react';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import NewPosts from './pages/NewPosts';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import instagramIcon from './assets/img/icon-instagram.svg'
import facebookIcon from './assets/img/icon-facebook.svg'
import youtubeIcon from './assets/img/icon-youtube.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import './assets/styles/App.css'

function App() {
  return (

      <div className="app-container">
        <div className="container-wrap">
      <Router>
        <div>
          <NavBar home = '/' register= '/register' newposts= 'newposts'/>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
              <Route path="/newposts">
                <NewPosts/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
          </Switch>
        </div>
      </Router>
      </div>
      <footer className="footer">
         <Footer facebook= {facebookIcon} instagram= {instagramIcon} youtube= {youtubeIcon}/>
      </footer>
    </div>

  );
}

export default App;
