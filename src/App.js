import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FireNS</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Strona główna</NavItem>
            <NavItem eventKey={2} href="#">Oferta</NavItem>
            <NavItem eventKey={2} href="#">Serwis</NavItem>
            <NavItem eventKey={2} href="#">Certyfikaty</NavItem>
            <NavItem eventKey={2} href="#">Kontakt</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
