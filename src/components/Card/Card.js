import React, {useState} from 'react';
import '../Card/Card.css'
import '../ItemListContainer/ItemListContainer'
import {StockCounter} from '../ItemCount/ItemCount'


export const MostrarCard = props => {
    
    const {stock,titulo} = props

return <article className='card'>
<h3>{titulo}</h3>
<StockCounter stock={stock}/>
</article>  

}

