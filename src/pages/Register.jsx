import React, { useState } from 'react';
import {Form,Button,Container, Col, Row,Nav} from 'react-bootstrap';
import '../assets/styles/Register.css';
import {
  BrowserRouter as Router,Redirect,} from "react-router-dom";



const Register = () => {

  const [toRegister, setToRegister] = useState(false)


    return (
      
      <div className= "register-container">
      {toRegister === true ?
      (<Redirect to="/login"/>) :
      (
            <Container>
              <Row>
               
                <Col className="register-col" md={{span:6,offset:3}}>
                  <div className="btn-box">
                    <div  className="btn-color"></div>
                    <button className="btn-trigger">Register</button>
                    <button onClick={() => setToRegister(true)} className="btn-trigger">Login</button>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                      <div className="btn-submit-box">
                <Button id="btn-submit" variant="primary" type="submit">
                      Registrarse
                </Button>
                      </div>
                  </Form>
                </Col>
              </Row>
            </Container>
      )}
       

      </div>
    );
}

export default Register;