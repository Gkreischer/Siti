import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            authenticated: true
        }
    }

    render() {
        return(
            <div>Usuário Login</div>
        );
    }
}

export default Home;