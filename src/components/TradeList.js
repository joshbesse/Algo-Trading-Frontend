import React from 'react';
import '../styling/TradeList.css'

const TradeList = ({ trades }) => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString();
    };

    const recentTrades = trades.slice(-10);

    return (
        <div>
            <h3>Recent Trades</h3>
            <ul>
                {recentTrades.map((trade, index) => (
                    <li key={index}>
                        {`${formatDate(trade.trade_date)} - ${trade.ticker} - ${trade.trade_type} ${trade.shares} shares at $${trade.price}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TradeList;