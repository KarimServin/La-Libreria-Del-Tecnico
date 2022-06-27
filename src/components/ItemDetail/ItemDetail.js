import React, { useEffect, useState } from "react";

const ItemDetail = producto => {

    

    console.log(producto);

    
    return <article>
        <h5>$ {producto.price}</h5>
    </article>

}
 
export default ItemDetail;

