import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Redirect} from 'react-router-dom';
import { AuthRoute } from 'react-router-auth'
import Home from './HomeComponent';
import Login from './LoginComponent';
import Menu from './MenuComponent';
import Equipamentos from './EquipamentosComponent';
import { Switch } from 'react-router-dom';
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
                    <Menu />
                    <Switch>
                        <AuthRoute path="/home" component={Home} redirectTo="/loginUsuario" authenticated={this.state.isLogged} />
                        <AuthRoute path="/equipamentos" component={Equipamentos} redirectTo="/loginUsuario" authenticated={this.state.isLogged} />
                    </Switch>
                </div>
            );
        }
    }

}

export default Main;