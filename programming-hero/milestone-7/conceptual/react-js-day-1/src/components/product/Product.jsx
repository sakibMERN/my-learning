import React from 'react'
import AnotherProduct from '../produncts/AnotherProduct'

export default function Product({info}) {
  //I use {info} when receiving props. But i can use here just "props" and then i need to destructuring it . like "const {info} = props"
  const {message, phone} = info;
  console.log(message);
  console.log(phone);
  return (
    <div >
      <h2>This is from product child.</h2>
      <AnotherProduct></AnotherProduct>
    </div>
  )
}
