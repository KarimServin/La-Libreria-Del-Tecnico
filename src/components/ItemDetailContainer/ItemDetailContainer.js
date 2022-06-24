import React, { useState,useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()
    
    const [itemQ,setItems] = useState([]);
        

    useEffect( () => {
        const getItems = () => {
            axios
            .get('https://62b26723c7e53744afcbd736.mockapi.io/products')
            .then (({ data }) => setItems(data))
            }
            getItems()    
        }, [])     

        
    }

    



   

export default ItemDetailContainer;





