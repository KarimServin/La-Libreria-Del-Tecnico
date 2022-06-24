import React from "react";
import { NavDropdown } from 'react-bootstrap';



const Categoria = () => {

return <NavDropdown title="Categoría" id="basic-nav-dropdown">
<NavDropdown.Item>Ingenieria</NavDropdown.Item>
<NavDropdown.Item>Materias Basicas</NavDropdown.Item>
<NavDropdown.Item>Todos los productos</NavDropdown.Item>
</NavDropdown>
}

export default Categoria;