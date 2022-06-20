import React from 'react';
import { IconoCarrito } from '../cartWidget/CartWidget';
import { Navbar,Container,Nav,Form,Button,NavDropdown,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'



export const NavbarFunction = () => {

   //EL SIGUIENTE CODIGO COMPRENDE TODO EL NAVBAR, ES PARTE DE BOOTSTRAP
   return <header>
   <Navbar expand="lg">
   <Container fluid>
     <Navbar.Brand href="#">La Librería del Técnico</Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse  id="navbarScroll">
       <Nav className="me-auto my-2 my-lg-0">
         <Nav.Link href="#action1">Home</Nav.Link>
         <Nav.Link href="#action2">Contacto</Nav.Link>
          <Nav.Link href="#" id="myCart"> <IconoCarrito/> </Nav.Link>
       </Nav>
       <Form className="d-flex">
         <FormControl
           type="search"
           placeholder="Ingrese un libro"
           className="me-2"
           aria-label="Search"
         />
         <Button className="border-none">Buscar</Button>
       </Form>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 </header>
}

