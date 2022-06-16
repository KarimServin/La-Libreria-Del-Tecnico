import React from 'react';
import { MostrarCard } from '../Card/Card';
import './ItemListContainer.css'

const productos = [{stock:5, titulo: 'Calculo Stewart'},
{stock:7, titulo: 'Calculo Larson'},
{stock:3, titulo: 'Calculo Apostol'},
{stock:8, titulo: 'Calculo Sadosky'},
{stock:8, titulo: 'Matematica Discreta'},
{stock:8, titulo: 'Métodos Numéricos'}]

export const ContainerDeProductos = () => {

    return <section>
    {productos.map((producto) => (<MostrarCard stock={producto.stock} titulo={producto.titulo}/>)
    )}
    </section>


}

