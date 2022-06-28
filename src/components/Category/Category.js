import React from "react";
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Categoria = () => {

return <NavDropdown title="Categoría" id="basic-nav-dropdown">
<NavDropdown.Item><Link to={`/category/ingenieria`} style={{ textDecoration: 'none', color: 'black' }}>Ingenieria</Link></NavDropdown.Item>
<NavDropdown.Item><Link to={`/category/basicas`} style={{ textDecoration: 'none', color: 'black' }}>Materias Basicas</Link></NavDropdown.Item>
<NavDropdown.Item><Link to={`/category/todos`} style={{ textDecoration: 'none', color: 'black' }}>Todos los productos</Link></NavDropdown.Item>
</NavDropdown>
}

export default Categoria;