import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Container className="container">
          <NavbarBrand href="/">Sapup3</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Anúncios</NavLink>
            </NavItem>      
          </Nav>        
          </Collapse>
        </Container> 
      </Navbar>
    </div>
  );
}
