// import React, { Component } from 'react'
// import Carousel from 'react-elestic-carousel'
// class App extends Component  () => {
  
//     state={
//         items:[
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''},
//             {url:''}
//         ]
//     }
  
//   render(){
//       const {itmes} =this.state
 
//     return (
//     <Carousel>
//     {items.map(item=><img src={item.url}></img>)}
//     </Carousel>
//   )
// }
// }


import React from "react";
import Carousel from 'react-elastic-carousel';
import Item from './items'
const breakpoints=[
    {width :1 , itemsTOShow:1},
    {width :550 , itemsTOShow:2},
    {width :768 , itemsTOShow:3},
    {width :1200 , itemsTOShow:4},
    
];

function Slider(){
    return (
        <>
        <Carousel breakPoints={breakpoints}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
        </Carousel>
        </>
    )
}

export default Slider