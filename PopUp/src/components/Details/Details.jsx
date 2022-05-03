import React from 'react'
import './detaill.css';
export const Details = () => {
    return (
        <div>
            <div className='amount' style={{

            }}>
              <span className='rs'> <span style={{fontSize:"15px" , border:"1px solid green" , paddingTop:"-10px"}}> ₹</span> 2093</span><span className='tax'>Inclusive of all taxes ₹ 2599 Save 1040(40.02%)</span> <br />
              <a href='#'><span className='orange'>Free shipping on all orders</span></a> <span className='logo'><img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/points-16.svg" alt="" /> Earn 4 Point </span><br />
               Color:<b>Black</b> <br />
               <img className='proimg' src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444494-Pink-DustyPink-1000010444494_01-2100.jpg" alt="" />
            </div>
            <div>
                Size:  <span className='guide'><a>Size Guide</a></span> 
                <div className='size'>
                    <div className='s1'>32</div>
                    <div className='s1'>34</div>
                    <div className='s1'>36</div>
                    <div className='s1'>38</div>
                    <div className='s1'>40</div>
                    <div className='s1'>42</div>
                </div>
                <button className='basket'>ADD TO BASKET</button><br />
                <i class="fa-solid fa-heart"></i>Add to Favourites
            </div>
            <hr />
            {/* Promotions */}
            <div>
                <button className='promotion'>PROMOTION OFFER</button><br />
                Buy 1 at 799 or Buy 2 at 999 <a href="">Browse promotion</a> 
            </div>
            <hr />

            {/* information */}
            <div>
                <div>
                   <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/cc.svg" alt="" /> Click & Collecte <br />
                  <p> Order this product now and collect it from a store of your choice. </p> <a href="" className='orange'>Learn more</a> 
                </div>
                <div>
                    <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/installment-black-24.svg" alt="" /> <span>Pay in installments</span><br />
                   <p>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.</p>  <a href="" className='orange'> Learn more</a> 
                </div>
                <div>
                    <img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/order-black-24.svg" alt="" /><span>When will receive my order?</span><br />
                    <input className='pincode' type="text"  placeholder='Enter your Pincode'/> <button style={{textDecoration:"none"}} className='check'>Check</button>
                </div>
            </div>
        </div>
    )
}
