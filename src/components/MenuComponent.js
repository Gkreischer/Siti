import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse, Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            dropDown: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    toggleDropdown() {
        this.setState({dropDown: !this.state.dropDown});
    }
    render() {
        return (
            <Navbar className="mb-3" color="dark" dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropDown} toggle={this.toggleDropdown}>
                                    <DropdownToggle caret>
                                    <span className="fa fa-desktop fa-lg"></span> Equipamento
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <Link className="nav-link text-dark" to='/cadastraEquipamento'>
                                                Cadastrar
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link text-dark" to='/editaEquipamento'>
                                                Editar
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="nav-link text-dark" to='/deletaEquipamento'>
                                                Deletar
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Sair</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Menu;