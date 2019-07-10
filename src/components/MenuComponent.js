import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({toggleNav: !this.toggleNav});
    }
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/equipamentos'><span className="fa fa-home fa-lg"></span> Equipamento</Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Menu;