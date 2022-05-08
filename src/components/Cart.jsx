import React, { useState } from "react";
import "./cart.css";
import { Checkoutbtn } from "./Checkoutbtn";
import { Emptycard } from "./Emptycard";
import { Offer } from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { delItem } from "../Redux/actions";

export const Cart = () => {
  const store = useSelector((store) => store.addItem);
  console.log(store);
  const dispatch = useDispatch();
  // console.log("state", state);
  const [counter, setCounter] = useState(1);
  const handleclick = (data) => {
    if (counter == 0) {
      setCounter(1);
    } else {
      setCounter(counter + data);
    }
  };
  // const cartItems = (cartItem) => {
    const xyz=()=>{
    return (
      <div className="main-div">
        <div>
          <h1 className="text text-h1">Your Shopping Basket</h1>
        </div>
        <hr />
        <p className="text text-p">{counter} products</p>
        <div className="cart-div offer-padding">
          <div className="flex-div">
            <div className="cart-item mb-15">
              <div className="c-itm">
                <div className="img-div">
                  <img
                    src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009848803-Pink-Pink-1000009848803_01-2100.jpg"
                    alt="title"
                  />
                </div>
                <div className="card-details">
                  <p>GINGER Women Solid Ballerinas</p>
                  <p className="ruppe-sign">
                    <span>₹</span>1349<span style={{color:"green"}}>₹ 350 saved</span>
                  </p>
                  <p className="color">
                    <p className="color-title">
                      <p>color : </p>
                    </p>
                    <p className="color-name">
                      <p>grey</p>
                    </p>
                  </p>
                  <p className="color">
                    <p className="color-title">
                      <p>size : </p>
                    </p>
                    <p className="color-name">
                      <p>s</p>
                    </p>
                  </p>
                </div>
              </div>
              <div className="qty-div">
                <div className="calender">
                  <span class="material-symbols-outlined">calendar_month</span>
                  <p>Delivery in 6-9 days</p>
                </div>
                <div className="flex text-align counter-div">
                  <span
                    class="material-symbols-outlined additem"
                    onClick={() => handleclick(1)}
                  >
                    add
                  </span>

                  <div className="counter ">{counter}</div>
                  <span
                    class="material-symbols-outlined additem"
                    onClick={() => handleclick(-1)}
                  >
                    remove
                  </span>
                </div>
              </div>
              <div className="button-div">
                <div>
                  <p className="color-orange">Remove</p>
                </div>
                <div>
                  <p className="color-orange">Move to Favourites</p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="cart-total">
            <div className="flex  space-between shadow offer-padding">
              <div className=" flex flex-itm">
                <p>Deliver to</p>
                <p className="margin-l5">415403</p>
              </div>
              <div>
                <p className="color-orange"> Change</p>
              </div>
            </div>
            <Offer />
            <Checkoutbtn />
          </div>
        </div>
      </div>
    );
  };
  const emptyCard = () => {
    return <Emptycard />;
  };

  return (
    // <>
    //   {state.length == 0 && emptyCard()}
    //   {state.length!==0 && state.map(cartItems)}
    // </>
    <>
      {counter < 1 && emptyCard()}
      {counter >= 1 && xyz()}
    </>
  );
};



