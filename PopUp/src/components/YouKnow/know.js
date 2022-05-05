import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';
// import items from "./items";
class Sliderr extends Component{
    state={
        items:[
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010425598-Red-Wine-1000010425598_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010023981-Purple-Purple-1000010023981_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010034252-Blue-Teal-1000010034252_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010214079-Grey-Grey-1000010214079_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010034202-Yellow-Mustard-1000010034202_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010024511-Orange-Rust-1000010024511_01-345.jpg'},
            {url:'https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010034500-Blue-Navy-1000010034500_01-345.jpg'},
        ]
    };
    render(){
        const {items} =this.state;
    return (
        <Carousel>
            {items.map(item=><div><img src={item.url}></img></div>)}
        </Carousel>
    )


    }
}

export default Sliderr