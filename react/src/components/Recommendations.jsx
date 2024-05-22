import React, { useState, useEffect } from 'react';


// The input to Recommendations should be the duck that the component should get recs for
const Recommendations = async (props) => {

    const url = "http://127.0.0.1:5000/api/predict";

    const [recs, setRecs] = useState([]);

    const duck = props.data;

        const fetchData = async () => {
            try {
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
                console.log(data);
                setRecs(data);
                // Extract all ducks from recs and display as a component
            } catch (error) {
                console.error("Error posting data", error);
                // Handle errors here
            }
        };

        fetchData();

    return (
        <>
            <p>Recommendations here!</p>
        </>
    )
};

export default Recommendations;