import React from "react";
import CardItem from "../../Item/Item";


const ItemDetail = ({productos}) => {

      return  (productos.map( (p) =>
             <CardItem key={p.id} 
             title={p.name} 
             description = {p.description} 
             pictureUrl={p.pictureUrl}/>
        ))



}

export default ItemDetail;