import React from 'react'
import { useProductContext } from '../../Context/Context'

const Cart = () => {

  const { cartItems } = useProductContext()
  console.log(cartItems)
  return (
    <div>{cartItems.name}</div>
  )
}

export default Cart