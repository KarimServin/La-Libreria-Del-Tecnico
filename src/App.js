import React from 'react';
import {NavbarFunction} from './components/nabvar/navbar.js'
import { ContainerDeProductos } from './components/ItemListContainer/ItemListContainer.js';
import './components/nabvar/navbar.css'

function App() {
  return <> 
  <NavbarFunction />
  <ContainerDeProductos saludo="hola, esto es un contenedor de productos"/>
  </>
}


export default App;
