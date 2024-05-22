import React from 'react'

function DuckPage(props) {
  return(
        <div
        className="card"
        style={{ flex: "1", minWidth: "300px", maxWidth: "45%" }}
    >
        <div className="card-body">
            <h5 className="card-title">Duck Details</h5>
            <div className="card-text">Color: {props.data.duckDetails?.color}</div>
            <div className="card-text">Size: {props.data.duckDetails?.size} </div>
            <div className="card-text">Material: {props.data.duckDetails?.material} </div>
            <div className="card-text">Animal: {props.data.duckDetails?.animal}</div>
            <div className="card-text">Pattern: {props.data.duckDetails?.pattern}</div>
            <div className="card-text">Theme: {props.data.duckDetails?.theme}</div>
        </div>
            <div className="card-body">
                <h5 className="card-title">Additional information</h5>
                <div className="card-text">
                Durability(1 is fragile, 10 is strong):{" "}
                {props.data.duckdetails ?.durability}
                </div>
                <div className="card-text">
                Popularity: {props.data.duckdetails ?.popularity}
                </div>
                <div className="card-text">
                Price: ${props.data.duckDetails ?.price}
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
            onClick={() => addToCart(data._id)}
        >
            Buy
        </button>
        </div>
    </div>
    );
};

export default DuckPage
