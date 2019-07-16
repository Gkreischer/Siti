import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardText, Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import  fetch  from 'cross-fetch';
import { baseUrl } from '../shared/baseUrl';


class CadastraEquipamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            tipo: '',
            cliente: '',
            categoria: '',
            configuracao: '',
            foto: '',
            isModalOpen: false,
            categorias: [],
            token: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitModal = this.handleSubmitModal.bind(this);
        this.consultaCategoriasEAddNoSelect = this.consultaCategoriasEAddNoSelect.bind(this);
    }

    componentDidMount() {

        this.consultaCategoriasEAddNoSelect();
        
    }

    consultaCategoriasEAddNoSelect() {
        return fetch(baseUrl + '/categorias', {
            method: "GET",
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token')},
            credentials: 'same-origin'
        }).then(
            
            response => {
                console.log(localStorage.getItem('token'));
                if(response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then((response) => {
            
            let optionsFromApi = response.data.map(categoria => { return { value: categoria}});
            this.setState({categorias: [{value: {id:'', categoria: '--Selecione uma opção--'}}].concat(optionsFromApi)});
            console.log(this.state.categorias);
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmitModal() {

        let categoria = {categoria: this.state.categoria};
        console.log(categoria);
        return fetch(baseUrl + '/categoriasEquipamento', {
            method: "POST",
            body: JSON.stringify(categoria),
            headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token'), 
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
            credentials: 'same-origin'
        }).then((response) => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            throw error;
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.state.categorias.push({value: {id: response.data[1], categoria: response.data[0].categoria}});
            this.toggleModal();
        }).catch((error) => {
            console.log(error);
        });

    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen});
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
                                            <Col md="8">
                                                <FormGroup>
                                                    <Label htmlFor="nomeEquipamento">Nome</Label>
                                                    <Input className="form-control" type="text" id="nomeEquipamento" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <Label htmlFor="tipoEquipamento">Categoria</Label>
                                                    <div className="input-group">
                                                        <select className="form-control" name="categoria" id="categoriaEquipamento" value={this.state.categoria} onChange={this.handleInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                            {this.state.categorias.map((categoria) => <option key={categoria.value.id} value={categoria.value.categoria}>{categoria.value.categoria}</option>)}
                                                        </select>
                                                        <div className="input-group-append">
                                                            <button onClick={this.toggleModal} type="button" className="input-group-text btn-primary" id="categoria"><span className="fa fa-plus"></span></button>
                                                        </div>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md="8">
                                                <FormGroup>
                                                    <Label htmlFor="cliente">Cliente</Label>
                                                    <Input className="form-control" type="text" id="cliente" name="cliente" value={this.state.cliente} onChange={this.handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Adiciona Categoria</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmitModal}>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <Label htmlFor="categoria">Categoria</Label>
                                        <Input type="text" name="categoria" id="categoria" value={this.state.categoria} onChange={this.handleInputChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="button" onClick={this.handleSubmitModal}>Adicionar Categoria</Button>{' '}
                        <Button color="secondary" type="button" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }


}

export default CadastraEquipamentos;