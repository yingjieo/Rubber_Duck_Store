import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Checkout = ({ cart, setCart }) => {
    const [selectedCard, setSelectedCard] = useState('');

    const cardTypes = [
        { name: 'Visa', icon: 'fa-cc-visa' },
        { name: 'Mastercard', icon: 'fa-cc-mastercard' },
        { name: 'Discover', icon: 'fa-cc-discover' },
        { name: 'American Express', icon: 'fa-cc-amex' }
    ];
    const totalPrice = cart.reduce(
        (totalPrice, item) => totalPrice + item.price, 0
    );

    const clearCart = () => {
        setCart([]);
    };

    const placeOrder = () => {
        clearCart(); // Clear the cart
        alert('Your order has been placed!'); // Show a message
    };

    return (
        <>
            <div>Total Price: ${totalPrice}</div>
            <div className='Checkout-page'>
                <div className='Demographics'>Shipping information</div>
                <input
                    className="form-control mb-2"
                    placeholder='First name'
                    type='text'
                />
                <input
                    className="form-control mb-2"
                    placeholder='Last name'
                    type='text'
                />
                <input
                    className="form-control mb-2"
                    placeholder='Address'
                    type='text'
                />
                <input
                    className="form-control mb-2"
                    placeholder='City'
                    type='text'
                />
                <input
                    className="form-control mb-2"
                    placeholder='State'
                    type='text'
                />
                <input
                    className="form-control mb-2"
                    placeholder='Zipcode'
                    type='text'
                />
            </div>
            <div className='billing'>Billing Information</div>
            {/* Credit card type dropdown */}
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="card-type">Card Type</label>
                </div>
                <select className="custom-select" id="card-type" onChange={(e) => setSelectedCard(e.target.value)}>
                    <option value="">Select Card Type</option>
                    {cardTypes.map((card, index) => (
                        <option key={index} value={card.name}>{card.name}</option>
                    ))}
                </select>
            </div>
            {/* Credit card number input */}
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text"><FontAwesomeIcon icon={faCreditCard} /></span>
                </div>
                <input
                    className="form-control"
                    placeholder='Card Number'
                    type='int'
                />
            </div>
            <input
                className="form-control mb-2"
                placeholder='Card Holder'
                type='text'
            />
            <input
                className="form-control mb-2"
                placeholder='Expiration Date'
                type='text'
            />
            <input
                className="form-control mb-2"
                placeholder='Security code'
                type='text'
            />
            <button className="btn btn-primary" onClick={placeOrder}>
                Place Order
            </button>
        </>
    )
}
export default Checkout;