import React, { useState } from 'react';
import { Form, Button, Container, Col, Row, Nav } from 'react-bootstrap';
import '../assets/styles/Register.css';
import {
    BrowserRouter as Router, Redirect,
} from "react-router-dom";




const Register = () => {

    const [toLogin, setToLogin] = useState(false)
    const styles = {
        background: {
            marginLeft: "110px"
        }
    }

   

    return (

        <div className="register-container">
            {toLogin === true ?
                (<Redirect to="/register" />) :
                (
                    <Container>
                        <Row>
                           
                            <Col className="register-col" md={{span:6,offset:3}}>
                                <div className="btn-box">
                                    <div style={styles.background} className="btn-color"></div>
                                    <button onClick={() => setToLogin(true)} className="btn-trigger">Register</button>
                                    <button  className="btn-trigger">Login</button>
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
                                            Log in
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