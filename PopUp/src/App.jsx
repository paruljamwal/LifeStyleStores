import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImagesSlider from './components/product-images-slider';
import { productImages } from './assets'
import { Details } from './components/Details/Details';

function App() {
    return (
        <div>
           BIBA Women Printed A-Line Kurta
            <div className='mainbox'>
                <div className='products'>
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                </div>
                <div className='details'>
                    <Details></Details>
                </div>
            </div>


            <div className='sliderbox1'>
                <div className='sliderbox2'>
                    <ProductImagesSlider images={productImages} />
                </div>
            </div>
        </div>
    );
}

export default App;
