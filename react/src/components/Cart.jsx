import React from 'react'
import CartContent from './CartContent'

function Cart(props)  {
    const {cart, addToCart} = useContent(CartContent)
    return(
        <div className='container cart'>
            <div>Size: {props.data?.size}</div>
        </div>
        
        
    )
}
export default Cart