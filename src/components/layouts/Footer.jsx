import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import '../../assets/styles/Footer.css'

const Footer = props => {
return (
  <div className="footer-container">
    <Container>
      <Row>
        <Col
          className="footer-apps"
          xs={{ span: 2, offset: 2 }}
          sm={{ span: 2, offset: 2 }}
        >
          <a href="">
            {" "}
            <img src={props.facebook} />
          </a>
        </Col>
        <Col
          className="footer-apps"
          xs={{ span: 2, offset: 2 }}
          sm={{ span: 2, offset: 2 }}
        >
          <a href="">
            {" "}
            <img src={props.instagram} />
          </a>
        </Col>
        <Col
          className="footer-apps"
          xs={{ span: 2, offset: 2 }}
          sm={{ span: 2, offset: 2 }}
        >
          <a href="">
            <img src={props.youtube} />
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Footer;
