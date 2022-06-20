import React from "react";
import CardItem from "../Item/Item";


const ItemList = ({products}) => {

      return  (products.map( (p) =>
             <CardItem id={p.id} title={p.title} description = {p.description} pictureUrl={p.pictureUrl}/>
        ))



}

export default ItemList;