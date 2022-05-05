import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImagesSlider from './components/product-images-slider';
import { productImages} from './assets'
import { Details } from './components/Details/Details';
import { Product } from './components/productshow/Product';
import Slider from './components/YouKnow/Youknow';
import Sliderr from './components/YouKnow/know';
import Cardslider from './components/Slider1/cardslider';
import { Reviews } from './components/Reviews/Reviews';


function App() {
    return (
        <div>
           BIBA Women Printed A-Line Kurta
            <div className='mainbox'>
                <div className='products'><Product></Product></div>
                <div className='details'><Details></Details></div>
            </div>


            <div className='sliderbox1'>
                <div className='sliderbox2'>
                    <ProductImagesSlider images={productImages} />
                </div>
            </div>

            <div className='youknow_pro'>
            <h2>You may also like</h2>
             {/* <Slider></Slider>
              <Sliderr></Sliderr> */}
             <div className='slider3'>
             <Cardslider></Cardslider>
              <Reviews></Reviews>

             </div>
            </div>
        </div>
    );
}

export default App;
