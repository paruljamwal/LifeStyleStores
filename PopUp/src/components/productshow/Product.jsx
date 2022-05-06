import React, { useEffect, useState } from 'react'
import './Products.css'
import { useParams } from 'react-router-dom';
// import {ProductImagesSlider } from 'product-images-slider'
export const Product = () => {
var [product,setProduct]=useState({});

useEffect(()=>{
  getData()
},[]);



const {id}=useParams()

const getData=()=>{
  fetch(`https://lifestyle-back.herokuapp.com/products/62738194d74f0aa8ad76689d`)
  .then((response)=>response.json())
  .then((pro)=>setProduct(pro))
  
}

useEffect(()=>{
  getData()
},[]);

//console.log("PRODUCT",product)
const showpro=()=>{
  // <ProductImagesSlider style={{
  //   display:"block"
  // }}></ProductImagesSlider> 
console.log("helfsdfds")
}

//   async function catagories(){
//     try{
//      const res=await fetch(`https://lifestyle-back.herokuapp.com/products`)
//      var data=await res.json()
    
//      console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// } 
// var ans;
// catagories()
// async function get(){
  
//  ans=await catagories()
// }
// console.log("ans",ans)
    // console.log("product....",setProduct)
  //  const proid=useParams();
  //  const product_details=Product.filter(e=>e.id===proid.id)
  //  const product_data=product_details[0]
  //  console.log(product_data)
    return (
      <>
            
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image1} alt="" /> </div>
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image2} alt="" /> </div>
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image3} alt="" /></div>
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image4} alt="" /></div>
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image5} alt="" /></div>
            <div class="grid-item"><img onClick={showpro} className='single' src={product.image6} alt="" /></div>
           
            </>
    )
}
