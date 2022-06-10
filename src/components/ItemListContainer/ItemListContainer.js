import React from 'react';

export const ContainerDeProductos = props => {

const {saludo} = props; //SE TIENE QUE RESPETAR EL NOMBRE DE LOS ATRIBUTOS QUE RECIBE

console.log(props);

    return <h1> {saludo}</h1>

}