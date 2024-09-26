import React from 'react';
import '../styling/ModelDescription.css'

const ModelDescription = ({ description }) => {
    return (
        <div>
            <h3>Model Description</h3>
            <p>{description}</p>
        </div>
    );
};

export default ModelDescription;