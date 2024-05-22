import React, { useState } from 'react';


// The input to Recommendations should be the duck that the component should get recs for
const Recommendations = async (props) => {

    const [recs, setRecs] = useState();

    const duck = props.data;
    try {
        const response = await fetch(import.meta.env.PYTHON_URL, {
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
        setRecs(data);
        console.log(data);
        // Extract all ducks from recs and display as a component
    } catch (error) {
        console.error("Error posting data", error);
        // Handle errors here
    }

    return (
        <>
            <p>Recommendations here!</p>
        </>
    )
};

export default Recommendations;