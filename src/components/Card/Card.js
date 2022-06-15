import React from 'react';
import {useState} from 'react';
import '../Card/Card.css'
import '../ItemListContainer/ItemListContainer'

const [cantidad, setCantidad] = React.useState(1)

export const MostrarCard = props => {

return <article className='card'>

<h3>Producto1</h3>
<button onClick={() => {setCantidad(cantidad + 1)}}>Comprar</button>
<p>stock: {cantidad} </p>
<p>unidades que lleva: </p>
</article>


   

}

