import "./App.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ProductImagesSlider from "./components/product-images-slider";
import { productImages } from "./assets";
import { Details } from "./components/Details/Details";
import { Product } from "./components/productshow/Product";
import Slider from "./components/YouKnow/Youknow";
import Sliderr from "./components/YouKnow/know";
import Cardslider from "./components/Slider1/cardslider";
import { Reviews } from "./components/Reviews/Reviews";
import { Slider2 } from "./components/slider2/slider2";
import {Routes,Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {

    //const data=`https://lifestyle-back.herokuapp.com/products`

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
  return (

    <div>
      {/* <Routes>
        <Route exact path="/catagories/:id" element={<Product></Product>}></Route>
      </Routes> */}
     <i>{product.productName}</i>
      <div className="mainbox">
        <div className="products">
          <Product></Product>
        </div>
        <div className="details">
          <Details></Details>
        </div>
      </div>
      <div className="sliderbox1">
        <div className="sliderbox2">
          <ProductImagesSlider images={productImages} />
        </div>
      </div>
      <div className="youknow_pro">
        
        {/* <Slider></Slider>
              <Sliderr></Sliderr> */}
        <div className="slider3">
       
          <Cardslider></Cardslider>
          <Reviews></Reviews>
          <Slider2></Slider2>
        </div>
      </div>
    </div>
  );
}

export default App;
