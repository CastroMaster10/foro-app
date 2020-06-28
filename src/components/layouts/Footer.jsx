import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import '../../assets/styles/Footer.css'

const Footer = props => {
return (
  <div className="footer-container">
    <Container>
      <Row>
        <Col
          className="footer-apps"
          // xs={{ span: 2, offset: 2 }}
          xs={{span: 3, offset: 1}}
          sm={{ span: 1, offset: 0 }}
        >
          <a href="">

            <img src={props.facebook} />
          </a>
        </Col>
        <Col
          className="footer-apps"
          // xs={{ span: 2, offset: 2 }}
          xs={{ span: 3, offset: 1 }}
          sm={{ span: 1, offset: 0 }}
        >
          <a href="">

            <img src={props.instagram} />
          </a>
        </Col>
        <Col
          className="footer-apps"
          // xs={{ span: 2, offset: 2}}
          xs={{ span: 3, offset: 1 }}
          sm={{ span: 1, offset: 0 }}
        >
          <a href="">
            <img src={props.email} />
          </a>
        </Col>
        <Col className= "comments-box" xs={12} md={4}>
          <h5> ¡Apreciamos sus comentarios! </h5>
          <input placeholder="comments" type="text"/>
          <Button id="btn-comments">Enviar</Button>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Footer;
