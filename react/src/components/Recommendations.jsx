import React, { useState, useEffect } from 'react';
import DuckPage from './DuckPage'


// The input to Recommendations should be the duck that the component should get recs for
const Recommendations = ({addToCart, recs}) => {

    return (
        <>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    recs.map((duck) => (
                        <DuckPage key={duck.duck_id} data={duck} addToCart={addToCart}/>
                    ))
                }
            </div>
        </>
    );
};

export default Recommendations;