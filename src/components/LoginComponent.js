import React from 'react';

import { Container, Row, Col, Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function Login(props) {

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center mt-5">
                    <Col md="3">
                        <Card>

                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col md="12">
                                            <h3>Login</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="text" name="email" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="form-group">
                                                <label>Senha</label>
                                                <input className="form-control" type="password" name="password" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;