import React from 'react'
import { useProductContext } from '../../Context/Context'

const Cart = () => {

  const { cart } = useProductContext
  
  return (
    <div>Cart</div>
  )
}

export default Cart