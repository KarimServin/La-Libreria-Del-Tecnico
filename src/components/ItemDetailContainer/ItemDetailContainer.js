import React, { useState,useEffect } from "react";
import ItemDetail from "../ItemList/ItemDetail/ItemDetail";
import customFetch from "../../utils/customFetch";
import axios from 'axios';

const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);

    useEffect( () => {
         
        const getItems = () => {
          axios
          .get("https://62b26723c7e53744afcbd736.mockapi.io/:endpoint")
          .then (product => setItems(product.unidad))
          }

          getItems();
          customFetch(2000,items)

    }, [])


        
        return <section className='ContainerProductos'>
        <ItemDetail products={items}/>
    </section>


    }

   


export default ItemDetailContainer;