import React, {Link} from "react";

const Checkout = ({cart, setCart}) => {
    const totalPrice = cart.reduce(
        (totalPrice, item) => totalPrice + item.price, 0
      )
    const clearCart = () => {
        setCart([])
      }
    return(
        <>
            <div>Total Price: ${totalPrice}</div>
            <div className = 'Checkout-page'>
                <div className = 'Demographics'>Shipping information</div>
                <input
                    placeholder='First name'
                    type='text'
                    />
                <input
                    placeholder='Last name'
                    type='text'
                    />
                <input
                    placeholder='Address'
                    type='text'
                    />
                <input
                    placeholder='City'
                    type='text'
                    />
                <input
                    placeholder='State'
                    type='text'
                    />
                <input
                    placeholder='Zipcode'
                    type='text'
                    />
                
            </div>
            <div className = 'billing'>Billing Information</div>
            <input
                placeholder='Card Number'
                type='int'
                />
            <input
                placeholder='Card Holder'
                type='text'
                />
            <input
                placeholder='Expiration Date'
                type='text'
                />
            <input
                placeholder='Security code'
                type='text'
                />
            <button onClick={(clearCart)} >
                {/* <Link to='/Home'>Order</Link> */}
                </button>
        </>
    )
}
export default Checkout