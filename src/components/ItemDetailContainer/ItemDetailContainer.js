import React, { useState,useEffect } from "react";
import ItemDetail from "../ItemList/ItemDetail/ItemDetail";
import customFetch from "../../utils/customFetch";
import axios from 'axios';
import products from "../../utils/products";

const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);

    

    useEffect( () => {
         
        const getItems = () => {
            axios
            .get("https://62b26723c7e53744afcbd736.mockapi.io/products")
            .then (({ data }) => setItems(data))
            }

           
            setTimeout(() => {getItems()},2000)      

    }, [])


    

console.log(items);
        
        return <section className='ContainerProductos'>
        <ItemDetail productos={items}/>
    </section>


    }

   


export default ItemDetailContainer;





