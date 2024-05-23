import React, { useState, useEffect } from 'react';
import DuckPage from './DuckPage'


// The input to Recommendations should be the duck that the component should get recs for
const Recommendations = (props) => {

    const url = "http://127.0.0.1:5000/api/predict";

    const [recs, setRecs] = useState([]);

    const duck = props.data;
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!duck) {
                    return;
                }
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(duck),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                // console.log(data);
                setRecs(data);

            } catch (error) {
                console.error("Error posting data", error);
                // Handle errors here
            }
        };

        fetchData();
    }, [duck]);

    return (
        <>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {
                    recs.map((duck) => (
                        <DuckPage key={duck.duck_id} data={duck} addToCart={props.addToCart}/>
                    ))
                }
            </div>
        </>
    );
};

export default Recommendations;