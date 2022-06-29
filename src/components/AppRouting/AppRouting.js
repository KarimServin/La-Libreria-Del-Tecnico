import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { NavbarFunction } from "../nabvar/Navbar";
const AppRouting = () => {

    return <BrowserRouter>
    <Routes>

      <Route path='/' element={<> <NavbarFunction />
      <ItemListContainer/>
      </>}/>
      
      <Route path='/item/:id' element={
      <>
      <NavbarFunction/>
      <ItemDetailContainer/>
      </>}/>

      <Route path='/category/:categoryid' element={
        <>
        <NavbarFunction/>
        <ItemListContainer/>
        </>
        } />


    </Routes>
    
    </BrowserRouter>


}

export default AppRouting;