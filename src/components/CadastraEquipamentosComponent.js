import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardText, Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';


class CadastraEquipamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            tipo: '',
            cliente: '',
            configuracao: '',
            foto: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        console.log()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Equipamento</BreadcrumbItem>
                        <BreadcrumbItem active>Cadastro</BreadcrumbItem>
                    </Breadcrumb>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <Container>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label htmlFor="nomeEquipamento">Nome</Label>
                                                    <Input className="form-control" type="text" id="nomeEquipamento" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label for="tipoEquipamento">Tipo</Label>
                                                    <Input type="select" name="tipo" id="tipoEquipamento" value={this.state.tipo} onChange={this.handleInputChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                    </Form>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default CadastraEquipamentos;