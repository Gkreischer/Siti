import React, { Component } from 'react';
import { Container, Row, Col,  Card, CardBody, CardTitle } from 'reactstrap';

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
                        <Container>
                            <Row>
                                <Col md="4">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>
                                                <h3>OS atrasadas</h3>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>
                                                <h3>Lembretes</h3>
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;