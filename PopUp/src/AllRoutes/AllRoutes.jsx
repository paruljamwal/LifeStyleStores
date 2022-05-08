import { Route, Routes } from "react-router-dom"
import { Product } from "../components/productshow/Product"



export const AllRoutes = ()=>{


    return(
        <Routes>
          <Route path="/" element = {"hello i am home page"}/> 
          <Route path="/category" element = {"hello i am category page"}/>  
          <Route path="/category/:id" element = {<Product/>}/> 
           <Route path="/cart" element = {"hello i am cart page"}/> 
          <Route path="/checkout" element = {"i am checkout page"}/>  

        </Routes>
    )
}