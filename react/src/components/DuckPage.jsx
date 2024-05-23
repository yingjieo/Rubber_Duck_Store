import React from 'react'
import { Link } from 'react-router-dom';
import duck_image from '../../../images/rubber_duck.png';

function DuckPage(props) {
    const{data, addToCart} = props
    const handleAddToCart = () => {
        addToCart(data)
    }
    let stars = "⭐".repeat(props.data ?.popularity);
  return(
        <div
        className="card"
        style={{ flex: "1", minWidth: "300px", maxWidth: "45%" }}
    >
        <div className="card-body">
            <section id='img'>
                <img src={duck_image} />
            </section>
            <h5 className="card-title">{props.data?.name}</h5>
            <div className="card-text">Color: {props.data?.color}</div>
            <div className="card-text">Size: {props.data?.size} </div>
            
                <div className="card-text">
                Popularity: {stars}
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
