import React from 'react';
import {Form,Button,Container, Col, Row} from 'react-bootstrap';
import '../assets/styles/Register.css';


const Register = () => {
    return (
      <div className= "register-container">
        <Container>
          <Row>
            <Col sm={{span:4,offset:4}}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Registrarse
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Register;