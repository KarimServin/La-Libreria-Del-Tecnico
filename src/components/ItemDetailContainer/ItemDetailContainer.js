import React, { useState,useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {



    const {id} = useParams(); //LA ID DE ROUTING


    const [productList,setProductList] = useState([]);


    useEffect ( () => {

        const getProducts = () => {
        axios
        .get('https://62b26723c7e53744afcbd736.mockapi.io/products')
        .then((response) => setProductList(response.data))

        }

        getProducts();

    },[setProductList])


    const newItem = productList.filter( p => p.id == id);

return <SendDetails producto={newItem} />

}


const SendDetails = ({producto}) => {

    
    return (producto.map( p => 

        <ItemDetail key={p.id} id={p.id} title={p.title} price={p.price} pictureUrl={p.pictureUrl} description={p.description}/>

  ))



    }
    

    




export default ItemDetailContainer;