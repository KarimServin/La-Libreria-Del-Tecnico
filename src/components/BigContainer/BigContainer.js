import React from 'react'
import {NavbarFunction} from '../nabvar/navbar'
import { ContainerDeProductos } from '../ItemListContainer/ItemListContainer'


//ESTE ES UN SUPERCONTAINER QUE INCLUYE 
//TODOS LOS COMPONENTES PARA MEJORAR LEGIBILIDAD DE APP.JS

export const  AllContainer   = () => {
return <>
  <NavbarFunction />
  <ContainerDeProductos/>
  </>
}

