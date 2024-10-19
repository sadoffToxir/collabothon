import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './ExchangeRates.scss';

interface ExchangeRateData {
  date: string;
  rate: number;
}

const ExchangeRates: React.FC = () => {
  // Currency options
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];

  // State variables
  const [fromCurrency, setFromCurrency] = useState<string>('EUR');
  const [toCurrency, setToCurrency] = useState<string>('USD');

  // Mock data generation for exchange rates
  const getMockData = (from: string, to: string): ExchangeRateData[] => {
    const data: ExchangeRateData[] = [];
    const baseRate = getMockExchangeRate(from, to);

    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      // Generate a mock exchange rate with minimal fluctuations
      const fluctuation = Math.sin(i / 5) * 0.005; // Smoother fluctuations
      const rate = baseRate + fluctuation;
      data.push({ date: dateString, rate: parseFloat(rate.toFixed(4)) });
    }
    return data;
  };

  // Mock function to get exchange rate
  const getMockExchangeRate = (from: string, to: string): number => {
    const baseRates: Record<string, number> = {
      USD: 1.0,
      EUR: 0.9,
      GBP: 0.8,
      JPY: 110.0,
      AUD: 1.4,
      CAD: 1.3,
    };
    const fromRate = baseRates[from];
    const toRate = baseRates[to];
    return toRate / fromRate;
  };

  // Handle currency selection change
  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  // Get the data for the selected currency pair
  const chartData = getMockData(fromCurrency, toCurrency);

  // Get the latest rate
  const latestRate = chartData[chartData.length - 1]?.rate || 0;

  return (
    <div className="exchangeRates">
      <div className="exchangeRates__header">
        <div className="exchangeRates__selector">
          <select
            className="exchangeRates__select"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {currencies.map((currency) => (
              <option value={currency} key={`from-${currency}`}>
                {currency}
              </option>
            ))}
          </select>
          <span className="exchangeRates__separator">/</span>
          <select
            className="exchangeRates__select"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {currencies.map((currency) => (
              <option value={currency} key={`to-${currency}`}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="exchangeRates__rate">{latestRate.toFixed(4)}</div>
      </div>

      {/* Chart */}
      <div className="exchangeRates__chart">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" hide />
            <YAxis domain={['dataMin - 0.01', 'dataMax + 0.01']} hide />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '12px',
              }}
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value: number) => [`${value.toFixed(4)}`, 'Rate']}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#34C759"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExchangeRates;
