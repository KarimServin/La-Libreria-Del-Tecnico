import React from 'react';
import { MostrarCard } from '../Card/Card';
export const ContainerDeProductos = props => {
let stock,actual;

stock=5;
actual=1;

const {saludo} = props; //SE TIENE QUE RESPETAR EL NOMBRE DE LOS ATRIBUTOS QUE RECIBE

ItemCount(stock,actual);

    return <MostrarCard/>


}


const  ItemCount = (stock,actual) => {

    stock>0? stock=stock-1 && actual++: console.log('no hay stock disponible');
       


}