import React, { useState, useEffect } from 'react';
import ModelSelector from './components/ModelSelector';
import PortfolioGraph from './components/PortfolioGraph';
import TradeList from './components/TradeList';
import PortfolioSummary from './components/PortfolioSummary';
import ModelDescription from './components/ModelDescription';
import { getPortfolios, getTrades } from './services/api';
import './App.css';

const App = () => {
  const [models] = useState([
    { id: "XGBOOST_6H", name: "XGBoost Model 6H", description: "XGBoost 6-hour prediction model" },
    { id: "XGBOOST_24H", name: "XGBoost Model 24H", description: "XGBoost 24-hour prediction model" },
    { id: "XGBOOST_48H", name: "XGBoost Model 48H", description: "XGBoost 48-hour prediction model" },
    { id: "LSTM_CE_6H", name: "LSTM CE Model 6H", description: "LSTM 6-hour prediction model using weighted sparse categorical cross-entropy" },
    { id: "LSTM_CE_24H", name: "LSTM CE Model 24H", description: "LSTM 24-hour prediction model using weighted sparse categorical cross-entropy" },
    { id: "LSTM_CE_48H", name: "LSTM CE Model 48H", description: "LSTM 48-hour prediction model using weighted sparse categorical cross-entropy" },
    { id: "LSTM_FL_6H", name: "LSTM FL Model 6H", description: "LSTM 6-hour prediction model using focal loss" },
    { id: "LSTM_FL_24H", name: "LSTM FL Model 24H", description: "LSTM 24-hour prediction model using focal loss" },
    { id: "LSTM_FL_48H", name: "LSTM FL Model 48H", description: "LSTM 48-hour prediction model using focal loss" },
  ]);

  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [portfolioData, setPortfolioData] = useState([]);
  const [trades, setTrades] = useState([]);
  const [summary, setSummary] = useState({});
  const [modelDescription, setModelDescription] = useState(models[0].description);

  // update model when selectedModel changes
  useEffect(() => {
    const model = models.find(m => m.id === selectedModel);
    if (model) {
      setModelDescription(model.description);
    }
  }, [selectedModel, models]);

  // fetch data when model changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioResponse = await getPortfolios(selectedModel);
        setPortfolioData(portfolioResponse.portfolio);
        setSummary({
          startingValue: portfolioResponse.starting_value,
          currentValue: portfolioResponse.current_value,
          highestValue: portfolioResponse.highest_value,
          lowestValue: portfolioResponse.lowest_value,
        });

        const tradesResponse = await getTrades(selectedModel);
        setTrades(tradesResponse.trades);
        setSummary((prevSummary) => ({
          ...prevSummary,
          totalBuys: tradesResponse.total_buys,
          totalSells: tradesResponse.total_sells,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedModel]);

  return (
    <div>
      <h1>Algorithmic Trading Dashboard</h1>
      <ModelSelector models={models} onModelChange={setSelectedModel} />
      <ModelDescription description={modelDescription} />
      <div className='dashboard'>
        <div className='left-column'>
          <PortfolioGraph data={portfolioData} />
        </div>
        <div className='right-column'>
          <PortfolioSummary summary={summary} />
          <TradeList trades={trades} />
        </div>
      </div>
    </div>
  );
};

export default App;
