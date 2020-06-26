import React from 'react';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
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

function App() {
  return (

      <div>
        <div style= {{marginBottom: '500px'}}>
      <Router>
        <div>
          <NavBar home = '/' register= '/register'/>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
      <Footer facebook= {facebookIcon} instagram= {instagramIcon} youtube= {youtubeIcon}/>
    </div>

  );
}

export default App;
