import React, {useEffect, useState} from 'react';
import './ItemListContainer.css'
import Item from '../Item/Item'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    
    const {categoryid} = useParams();

    let [ProductList,setProducts] = useState([]);

    useEffect( () => {
        const getItems = () => {
            axios
            .get('https://62b26723c7e53744afcbd736.mockapi.io/products')
            .then (({ data }) => setProducts(data))
            }
            
            getItems()
            
    }, [])


    let newProductList;
 

    categoryid==undefined? newProductList=ProductList:(
    categoryid=='todos'? newProductList=ProductList: newProductList = ProductList.filter( p => p.categoria==categoryid))
    

        return <section className='ContainerProductos'>
        <ItemListMap products={newProductList}/>

    </section>
}

    
    const ItemListMap = ({products}) => {
         
            return  (products.map( p =>
        
                   <Item key={p.id}
                   id={p.id} 
                   title={p.title} 
                   description = {p.description} 
                   pictureUrl={p.pictureUrl}/>
              ) )
      
    }

export default ItemListContainer;





