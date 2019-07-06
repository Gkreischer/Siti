import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './LoginComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

export default Main;