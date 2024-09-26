import React from 'react';
import '../styling/PortfolioSummary.css'

const PortfolioSummary = ({ summary }) => {
    return (
        <div>
            <h3>Portfolio Summary</h3>
            <p>Starting Value: ${summary.startingValue}</p>
            <p>Current Value: ${summary.currentValue}</p>
            <p>Highest Value: ${summary.highestValue}</p>
            <p>Lowest Value: ${summary.lowestValue}</p>
            <p>Total Buys: {summary.totalBuys}</p>
            <p>Total Sells: {summary.totalSells}</p>
        </div>
    );
};

export default PortfolioSummary;