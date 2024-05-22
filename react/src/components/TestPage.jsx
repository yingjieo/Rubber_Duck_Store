import React from 'react';
import Recommendations from './Recommendations'

const TestPage = (props) => {
    const testDuck = props.data[0];

    return (
        <>
            <p>This is a page used for testing</p>
            <Recommendations data={testDuck} />
        </>
    )
};

export default TestPage;