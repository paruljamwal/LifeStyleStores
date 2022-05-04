import React from 'react'
import './detaill.css';
export const Details = () => {
    return (
        <div>
            <div className='amount' style={{

            }}>
              <span className='red'>₹</span><span className='red price'>2093</span><span className='tax'>Inclusive of all taxes </span> <br />
              <span  className='strike gray'>₹ 2599</span> <span className='saving'>Save 1040(40.02%)</span> <br />
              <a href='#'><span className='orange free_shiping'>Free shipping on all orders</span></a> <span className='logo'><img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/points-16.svg" alt="" /> <span className='earning_point'>Earn 4 Point</span>  </span><br />
              
              <div className='img_demo'> Color:<b>Black</b></div> 
               <img className='proimg' src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444494-Pink-DustyPink-1000010444494_01-2100.jpg" alt="" />
            </div>
            <div className='size_section'>
                Size:  <span className='guide'><u>Size Guide</u></span> 
                <div className='size'>
                    <div className='s1'>32</div>
                    <div className='s1'>34</div>
                    <div className='s1'>36</div>
                    <div className='s1'>38</div>
                    <div className='s1'>40</div>
                    <div className='s1'>42</div>
                </div>
                <button className='basket'>ADD TO BASKET</button><br />
              <div className='heart_logo'><i class="fa-solid fa-heart"></i><span className='black'>Add to Favourites</span></div> 
            </div>
           
            {/* Promotions */}
            <div className='product_promotion'>
                <button className='promotion'>PROMOTION OFFER</button><br />
               <p className='product_deal'> LAST DAY to SAVE an EXTRA 20% OFF on all orders of Rs 3,499 & above. Use Code SALE20 | Get 10% OFF on orders of Rs 1,999 & above. Use Code: SALE10 <u> Browse promotion.</u> </p>
            </div>
        

            {/* information */}
            <div className='delivery_icons'>
                <div>
                   <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/cc.svg" alt="" /> <span className='icons_head'>Click & Collecte</span>  <br />
                  <p className='order_details'> Order this product now and collect it from a store of your choice.  <a href="" className='orange'>Learn more</a> </p>
                </div>
                <div>
                    <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/installment-black-24.svg" alt="" /> <span className='icons_head'>Pay in installments</span><br />
                   <p className='order_details'>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.  <a href="" className='orange'> Learn more</a> </p> 
                </div>
                <div>
                    <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/order-black-24.svg" alt="" /><span className='order_details icons_head'>When will receive my order?</span><br />
                    <input className='pincode' type="text"  placeholder='Enter your Pincode'/> <button style={{textDecoration:"none"}} className='check'>Check</button>
                </div>
            </div>

            
        </div>
    )
}
