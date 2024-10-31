import React from 'react'
import Product from '../product/Product'


export default function Products(props) {
  const {info } = props;
  // console.log(info);
// console.log(props);
  const products = {
    border: "2px solid red",
    margin: "10px",
    padding: "20px",
    borderRadius: "10px"
  }
  return (
    
    <div style={products}>
        <h1>I am from Products.</h1>
        <Product info = {info}></Product>
    </div>
  )
}
