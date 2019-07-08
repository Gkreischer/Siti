import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Label, FormGroup, CardBody } from 'reactstrap';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { baseUrl } from './../shared/baseUrl';
import { AuthRoute } from 'react-router-auth'
import Home from './HomeComponent';
import Login from './LoginComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }
        this.parentCallback = this.parentCallback.bind(this);

    }


    errorLogin(error) {
        if (this.state.error) {
            console.log(error);
            return (
                <Row className="text-center">
                    <Col md="12">
                        <p className="text-danger">{error}</p>
                    </Col>
                </Row>
            );
        }
    }

    parentCallback = (loginData) => {
        this.setState({isLogged: loginData});
    }

    render() {
        
        if(!this.state.isLogged) {
            return (
                <div>
                    <Redirect to="/loginUsuario" />
                    <Login parentCallback={this.parentCallback} component={Login} />
                </div>
                
            );
        } else {
            return(
                <div>
                    <Redirect to="/home" />
                    <AuthRoute path="/home" component={Home} redirectTo="/loginUsuario" authenticated={this.state.isLogged} />
                </div>
            );
        }
    }

}

export default Main;