import React from 'react';
import {Nav,Navbar,Form, FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router,Link} from "react-router-dom";

const NavBar = props => {
    return (
      <div>
        

              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Foro-app</Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link>
                    <Link to={props.home}> Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={props.newposts}>New Posts</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={props.register}>User</Link>
                  </Nav.Link>
                  </Nav>
              </Navbar>



      </div>
    );
}

export default NavBar;