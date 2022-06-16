import React from 'react';
import { IconoCarrito } from '../cartWidget/CartWidget';
import '../nabvar/navbar.css';

export const NavbarFunction = () => {
   
   return <div className='containerDiv'>

       <div className='tituloDiv'>La Libreria del Técnico</div>
    
   <nav>   
         <a href="#">Inicio</a>
         <a href="#">Productos</a>
         <a href="#">Contacto</a>
         <a href="#"> <IconoCarrito/></a>
    </nav>
              
          </div>

}

