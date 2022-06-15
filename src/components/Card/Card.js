import React, {useState} from 'react';
import '../Card/Card.css'
import '../ItemListContainer/ItemListContainer'



export const MostrarCard = props => {
    const [Stock,SetStock] = useState(props.stock);
    const [Quantity,SetQuantity]=useState(0);

return <article className='card'>

<h3>Producto1</h3>
<button onClick={() => Stock>0?(SetStock(Stock-1), SetQuantity(Quantity+1)):alert('NO HAY STOCK')}>Comprar</button>
<button onClick={() => Quantity>0? (SetStock(Stock+1), SetQuantity(Quantity-1)): alert('NO HAY EXISTENCIA DEL PRODUCTO EN EL CARRITO')}>Sacar del carrito</button>
<p>stock: {Stock}</p>
<p>unidades que lleva: {Quantity}</p>
</article>


   

}

