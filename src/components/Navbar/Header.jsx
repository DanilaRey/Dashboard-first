import React from 'react';
import { Navbar, Container, Nav, Breadcrumb } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from "react-router-dom";
import './Navbar.scss';
import { MdDashboard, MdApi } from 'react-icons/md';
import routes from '../../routes'


const Header = () => {
  const location = useLocation()

  const getBrandText = () => {
    for(let i = 0; i < routes.length; i++){
      if(location.pathname.indexOf(routes[i].path) !== -1){
        return routes[i].name
      }
    }
    return "Brand";
  }
  
  return (
<Navbar variant='dark' expand="lg" className='navbar__section'>
<Container fluid>
      <Navbar.Brand href="*" id="logo">{getBrandText()}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Breadcrumb>
          <Nav id="me-auto" >
            <Breadcrumb.Item href="#home" to="home" className='nav__links'>Account</Breadcrumb.Item>
            <Breadcrumb.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
              className='nav__links'
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#about" to="about" className='nav__links'>Log out</Breadcrumb.Item>
          </Nav> 
        </Breadcrumb>
      </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header