import React from 'react';
import { IconoCarrito } from '../CartWidget/CartWidget';
import { Navbar,Container,Nav,Form,Button,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Categoria from '../Category/Category';
import { Link } from 'react-router-dom';


export const NavbarFunction = () => {

   //EL SIGUIENTE CODIGO COMPRENDE TODO EL NAVBAR, ES PARTE DE BOOTSTRAP
   return <header>
   <Navbar expand="lg">
   <Container fluid>
     <Navbar.Brand href="#"><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>La Librería del Técnico</Link> </Navbar.Brand> 
     <Navbar.Toggle />
     <Navbar.Collapse  id="navbarScroll">
       <Nav className="me-auto my-2 my-lg-0">
         <Nav.Link><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></Nav.Link>
         <Nav.Link href="#action2">Contacto</Nav.Link>
         <Categoria/>
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
       <Nav.Link href="#" id="myCart"> <IconoCarrito/> </Nav.Link>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 </header>
}

