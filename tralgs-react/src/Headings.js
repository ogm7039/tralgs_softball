import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './TralgsLogoBlueCropped.png';
import Home from "./Home";
import Schedule from "./Schedule";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Headings extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="WhiteSmoke" light expand="md">
                <NavbarBrand href="/"> <img src={logo} className="Tralgs-logo" alt="logo" /> </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/schedule">Schedule</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/roster">Roster</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tickets">Tickets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/pictures">Pictures</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
    );
  }
}
export default Headings;