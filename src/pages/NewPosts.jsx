import React from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap'
import '../assets/styles/NewPosts.css'

const NewPosts = () => {
    return(
        <div className="newposts-container">
            <form action="" method= "">

                <Container>
                    <Row>
                        <Col md={{span:6,offset:5}}>
                        <h1 id= "header">Write sum...</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 2, offset: 3 }}>
                            <div>
                                <input placeholder="Title" type="text" name="title" id="title" />
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr" />
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>

                            <div class="form-group">

                                <textarea placeholder= "Content" class="form-control" id="content" name="content" rows="3"></textarea>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr" />
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} >
                            <Button id="boton-submit" type="submit">Submit</Button>    
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
       
    )
}

export default NewPosts;