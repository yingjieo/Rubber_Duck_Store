import React from 'react';
import Recommendations from './Recommendations'

const TestPage = () => {
    const testDuck = {
        color:"Red",
        size:"Medium",
        material:"Rubber",
        animal:"Duck",
        pattern:"Checkered",
        theme:"Princess",
        durability: 6,
        popularity: 4,
        price: 3
    }

    return (
        <>
            <p>This is a page used for testing</p>
            <Recommendations data={testDuck} />
        </>
    )
};

export default TestPage;