import React from "react";


const ItemDetail = ({producto}) => {





    return <article>
        <img src={producto.pictureUrl}></img>
        <h5>$ {producto.price}</h5>
        <p>{producto.description}</p>


    </article>




}
 


export default ItemDetail;

