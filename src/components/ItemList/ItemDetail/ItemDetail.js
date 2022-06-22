import React from "react";
import CardItem from "../../Item/Item";


const ItemDetail = ({products}) => {

      return  (products.map( (p) =>
             <CardItem key={p.id} 
             title={p.title} 
             description = {p.description} 
             pictureUrl={p.pictureUrl}/>
        ))



}

export default ItemDetail;