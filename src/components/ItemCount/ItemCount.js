import React, {useState} from 'react';
import '../Item/Item';
import './ItemCount.css'


const ItemCount = props => {

    const {stock}= props;
    console.log(stock)
    const [Stock,SetStock] = useState(stock);
    const [Quantity,SetQuantity]=useState(0);

return <section className='ItemCounter'> 
<div>
<button onClick={() => Stock>0?(SetStock(Stock-1), SetQuantity(Quantity+1)):alert('NO HAY STOCK')}>Comprar</button>
</div>
<div>
<button onClick={() => Quantity > 0 ? (SetStock(Stock + 1), SetQuantity(Quantity - 1)) : alert('NO HAY EXISTENCIA DEL PRODUCTO EN EL CARRITO')}>Sacar del carrito</button>
</div>
<p>Stock actual: {Stock}</p>
<p>Unidades en carrito: {Quantity}</p>
</section>

}

export default ItemCount;