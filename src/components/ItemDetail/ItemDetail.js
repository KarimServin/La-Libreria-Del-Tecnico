import React from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = props => {


    const{title,price,pictureUrl,description,stock} = props;
    

       

    return <article className="ItemDetail">
        
        <img src={pictureUrl} alt='Foto del producto'></img>
        
        <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <h5>  ${price} </h5>    
        <ItemCount stock={stock}/>
        </section>
        
        </article>
        

}
 
export default ItemDetail;

