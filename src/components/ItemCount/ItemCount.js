import React, {useState} from 'react';
import '../Item/Item';


export const StockCounter = props => {
    
    const [Stock,SetStock] = useState(props.stock);
    const [Quantity,SetQuantity]=useState(0);

return <> 
<div>
<button onClick={() => Stock>0?(SetStock(Stock-1), SetQuantity(Quantity+1)):alert('NO HAY STOCK')}>Comprar</button>
</div>
<div>
<button onClick={() => Quantity > 0 ? (SetStock(Stock + 1), SetQuantity(Quantity - 1)) : alert('NO HAY EXISTENCIA DEL PRODUCTO EN EL CARRITO')}>Sacar del carrito</button>
</div>
<p>stock: {Stock}</p>
<p>unidades que lleva: {Quantity}</p>
</>

}