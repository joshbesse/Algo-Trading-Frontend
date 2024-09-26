import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const PortfolioGraph = ({ data }) => {
    const processedData = data.map(point => ({
        date: new Date(point.date).toLocaleString(),
        portfolioValue: Number(point.value)
    }));

    const minValue = Math.min(...processedData.map(p => p.portfolioValue));
    const maxValue = Math.max(...processedData.map(p => p.portfolioValue));

    return (
        <ResponsiveContainer width="95%" height={450}>
            <LineChart data={processedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="portfolioValue" stroke="#8884d8" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PortfolioGraph;