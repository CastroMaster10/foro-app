import React from 'react';
import {Nav,Navbar,Form, FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router,Link} from "react-router-dom";

const NavBar = props => {

  const styles = {
    linkDecorations: {
      textDecoration: "none"
    }
  }
    return (
      <div className="navbar-container">
        

              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href= '/'>Foro-app</Navbar.Brand>
                   <Nav nav-links  className=" nav-links ml-auto">
                  <Nav.Link>
               <Link style= {styles.linkDecorations}  to={props.home}> Home</Link>
                  </Nav.Link>
                  <Nav.Link>
              <Link style={styles.linkDecorations} to={props.newposts}>New Posts</Link>
                  </Nav.Link>
                  <Nav.Link>
              <Link style={styles.linkDecorations} to={props.register}>User</Link>
                  </Nav.Link>
                  </Nav>
              </Navbar>



      </div>
    );
}

export default NavBar;