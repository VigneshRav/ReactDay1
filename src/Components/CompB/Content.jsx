import React from 'react';
import "./Content.css"
const CompB = () => {
    const HandleClick = () => {
        console.log("Button Clicked")
    }
    return (
        <div>
            <h1 id='htag'>Content</h1>
            <button id='button' type='button' onClick={HandleClick}>Click Me!</button>
        </div>
    );
};

export default CompB;