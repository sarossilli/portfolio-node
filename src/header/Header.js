import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg'
import { NavLink,HashRouter} from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
      <HashRouter>
        <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' '}
              Sam Rossilli
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/" className='fontHeader' style={{opactiy:'100%'}}> Home </NavLink>
              <NavLink to="/about" className='fontHeader' style={{opactiy:'100%'}}>About</NavLink>
            </Nav>
          
        </Container>
        </HashRouter>
      </Navbar>
    </div >


  );
}
//To Do: Fix CSS and # routing
export default Header;
