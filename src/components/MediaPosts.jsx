import React from 'react';
import { Media,Container, Row, Col } from "react-bootstrap";
import '../assets/styles/MediaPosts.css'
import Rating from './Rating'

const MediaPosts = props => {
    return (
      <div className="mediaposts-container">
        <Container>
          <Row>
            <Col sm= {{span:6, offset:3}}>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={props.pp}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <Rating/>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default MediaPosts;