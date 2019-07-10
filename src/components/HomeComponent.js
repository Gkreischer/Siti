import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col md="12">
                        Rola
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;