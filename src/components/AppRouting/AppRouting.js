import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { AllContainer } from "../BigContainer/BigContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetail from '../ItemDetail/ItemDetail'

const AppRouting = () => {

    return <BrowserRouter>
    <Routes>

      <Route path='/' element={<AllContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>

    </Routes>
    
    </BrowserRouter>


}

export default AppRouting;