import React, { Component} from 'react';
import { Container, Row, Col, Card, Form, Label, FormGroup, CardBody } from 'reactstrap';
import { baseUrl } from './../shared/baseUrl';
import  fetch  from 'cross-fetch';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: false,
            token: null,
            errorMessage: null,
            isLogged: false
        }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        const user = new FormData();
        user.append('email', this.state.email);
        user.append('password', this.state.password);
        console.log(user);

        return fetch(baseUrl + '/loginUsuario', {
            method: "POST",
            body: user,
            credentials: 'same-origin'
        }).then(response => {
            if (response.ok) {
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
        .then(response => response.json()).then((response) => {
            console.log(response);
            this.setState({token: response.token, error: false, errorMessage: null, isLogged: true});
            this.setTokenToLocalStorage(this.state.token);
            this.verifyIfIsLoggedIn(this.state.isLogged);
        }).catch(error =>  { 
            console.log('Login: ', error.message); 
            this.setState({error: true, errorMessage: error.message});
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

    setTokenToLocalStorage(token) {
        if(token) {
            localStorage.setItem('token', this.state.token);
        }
    }

    verifyIfIsLoggedIn = () => {
        this.props.parentCallback(this.state.isLogged);
    }

    render() {
        const errorLogin = (error) => {
            if(this.state.error){
                console.log(error);
                return(
                    <Row className="text-center">
                        <Col md="12">
                            <p className="text-danger">{error}</p>
                        </Col>
                    </Row>
                );
            } 
        }

        return (
            <Container fluid>
                    <Row className="justify-content-center mt-5">
                        <Col sm="12" md="4">
                            <Card>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Container>
                                            <FormGroup row>
                                                <Col md="12">
                                                    <h3>Login</h3>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="12">
                                                    <Label htmlFor="email">Email</Label>
                                                    <input className="form-control" type="text" id="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="12">
                                                    <Label htmlFor="password">Senha</Label>
                                                    <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row className="text-center">
                                                <Col md="12">
                                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                                </Col>
                                            </FormGroup>
                                            {errorLogin(this.state.errorMessage)}
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        );
    }
}

export default Login;