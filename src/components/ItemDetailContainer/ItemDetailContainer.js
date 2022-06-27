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


    const newItem = productList.find(p => p.id == id);

return <ItemDetail producto={newItem} />

}

export default ItemDetailContainer