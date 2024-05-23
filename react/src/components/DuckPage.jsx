import React from 'react'
import { Link } from 'react-router-dom';

function DuckPage(props) {
    const{data, addToCart} = props
    const handleAddToCart = () => {
        addToCart(data.duck_id)
    }
  return(
        <div
        className="card"
        style={{ flex: "1", minWidth: "300px", maxWidth: "45%" }}
    >
        <div className="card-body">
            <h5 className="card-title">Duck Details</h5>
            <div className="card-text">Color: {props.data?.color}</div>
            <div className="card-text">Size: {props.data?.size} </div>
            <div className="card-text">Material: {props.data?.material} </div>
            <div className="card-text">Animal: {props.data?.animal}</div>
            <div className="card-text">Pattern: {props.data?.pattern}</div>
            <div className="card-text">Theme: {props.data?.theme}</div>
        </div>
            <div className="card-body">
                <h5 className="card-title">Additional information</h5>
                <div className="card-text">
                Durability(1 is fragile, 10 is strong):{" "}
                {props.data ?.durability}
                </div>
                <div className="card-text">
                Popularity: {props.data ?.popularity}
                </div>
                <div className="card-text">
                Price: ${props.data ?.price}
                </div>
            </div>
        <div className="card-text">
            
        </div>
        <div
        className="card-footer"
        style={{ display: "flex", justifyContent: "space-between" }}
        >
        
        <button
            className="btn btn-sm btn-danger"
            onClick={handleAddToCart}
        >
            Add to cart
        </button>
        <Link to={`/${data.duck_id}`}>
        <button
            className="btn btn-sm btn-primary"
        > 
            More Info
        </button>
        </Link>
        </div>
    </div>
    );
};

export default DuckPage
