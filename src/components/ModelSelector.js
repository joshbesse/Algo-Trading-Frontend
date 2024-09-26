import React from 'react';

const ModelSelector = ({ models, onModelChange }) => {
    return (
        <div>
            <label htmlFor="model-select">Select Model: </label>
            <select id="model-select" onChange={(e) => onModelChange(e.target.value)}>
                {models.map((model) => (
                    <option key={model.id} value={model.id}>
                        {model.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelSelector;