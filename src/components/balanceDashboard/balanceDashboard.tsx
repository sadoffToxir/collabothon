import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './balanceDashboard.scss';

interface BalanceData {
  date: string;
  balance: number;
}

type Period = '7d' | '30d' | '90d';
type AssetType = 'All Assets' | 'Account 1' | 'Account 2' | 'Securities';

const BalanceDashboard: React.FC = () => {
  // Sample data for different assets and periods
  const data: Record<AssetType, Record<Period, BalanceData[]>> = {
    'All Assets': {
      '7d': [
        // Dates from October 13 to October 19
        { date: 'Oct 13', balance: 10000 },
        { date: 'Oct 14', balance: 10200 },
        { date: 'Oct 15', balance: 10250 },
        { date: 'Oct 16', balance: 10400 },
        { date: 'Oct 17', balance: 10400 },
        { date: 'Oct 18', balance: 10500 },
        { date: 'Oct 19', balance: 10600 },
      ],
      '30d': [
        // Dates from September 20 to October 19
        { date: 'Sep 20', balance: 9500 },
        { date: 'Sep 25', balance: 9700 },
        { date: 'Sep 30', balance: 9900 },
        { date: 'Oct 5', balance: 10050 },
        { date: 'Oct 10', balance: 10200 },
        { date: 'Oct 15', balance: 10250 },
        { date: 'Oct 19', balance: 10600 },
      ],
      '90d': [
        // Dates from July 22 to October 19
        { date: 'Jul 22', balance: 8500 },
        { date: 'Aug 10', balance: 8800 },
        { date: 'Aug 30', balance: 9000 },
        { date: 'Sep 15', balance: 9300 },
        { date: 'Oct 1', balance: 9800 },
        { date: 'Oct 15', balance: 10250 },
        { date: 'Oct 19', balance: 10600 },
      ],
    },
    'Account 1': {
      '7d': [
        { date: 'Oct 13', balance: 4000 },
        { date: 'Oct 14', balance: 4100 },
        { date: 'Oct 15', balance: 4200 },
        { date: 'Oct 16', balance: 4300 },
        { date: 'Oct 17', balance: 4200 },
        { date: 'Oct 18', balance: 4250 },
        { date: 'Oct 19', balance: 4300 },
      ],
      '30d': [
        { date: 'Sep 20', balance: 3800 },
        { date: 'Sep 25', balance: 3900 },
        { date: 'Sep 30', balance: 4000 },
        { date: 'Oct 5', balance: 4100 },
        { date: 'Oct 10', balance: 4200 },
        { date: 'Oct 15', balance: 4200 },
        { date: 'Oct 19', balance: 4300 },
      ],
      '90d': [
        { date: 'Jul 22', balance: 3400 },
        { date: 'Aug 10', balance: 3600 },
        { date: 'Aug 30', balance: 3800 },
        { date: 'Sep 15', balance: 3900 },
        { date: 'Oct 1', balance: 4000 },
        { date: 'Oct 15', balance: 3800 },
        { date: 'Oct 19', balance: 4300 },
      ],
    },
    'Account 2': {
      '7d': [
        { date: 'Oct 13', balance: 3500 },
        { date: 'Oct 14', balance: 3600 },
        { date: 'Oct 15', balance: 3550 },
        { date: 'Oct 16', balance: 3600 },
        { date: 'Oct 17', balance: 3700 },
        { date: 'Oct 18', balance: 3550 },
        { date: 'Oct 19', balance: 3800 },
      ],
      '30d': [
        { date: 'Sep 20', balance: 3200 },
        { date: 'Sep 25', balance: 3300 },
        { date: 'Sep 30', balance: 3400 },
        { date: 'Oct 5', balance: 3450 },
        { date: 'Oct 10', balance: 3400 },
        { date: 'Oct 15', balance: 3550 },
        { date: 'Oct 19', balance: 3800 },
      ],
      '90d': [
        { date: 'Jul 22', balance: 3100 },
        { date: 'Aug 10', balance: 3200 },
        { date: 'Aug 30', balance: 3300 },
        { date: 'Sep 15', balance: 3200 },
        { date: 'Oct 1', balance: 3250 },
        { date: 'Oct 15', balance: 3550 },
        { date: 'Oct 19', balance: 3800 },
      ],
    },
    'Securities': {
      '7d': [
        { date: 'Oct 13', balance: 2400 },
        { date: 'Oct 14', balance: 2300 },
        { date: 'Oct 15', balance: 2500 },
        { date: 'Oct 16', balance: 2300 },
        { date: 'Oct 17', balance: 2400 },
        { date: 'Oct 18', balance: 2600 },
        { date: 'Oct 19', balance: 2500 },
      ],
      '30d': [
        { date: 'Sep 20', balance: 2300 },
        { date: 'Sep 25', balance: 2100 },
        { date: 'Sep 30', balance: 2200 },
        { date: 'Oct 5', balance: 2300 },
        { date: 'Oct 10', balance: 2200 },
        { date: 'Oct 15', balance: 2600 },
        { date: 'Oct 19', balance: 2500 },
      ],
      '90d': [
        { date: 'Jul 22', balance: 2000 },
        { date: 'Aug 10', balance: 2000 },
        { date: 'Aug 30', balance: 1900 },
        { date: 'Sep 15', balance: 2000 },
        { date: 'Oct 1', balance: 2350 },
        { date: 'Oct 15', balance: 2500 },
        { date: 'Oct 19', balance: 2500 },
      ],
    },
  };

  // State to track selected period and asset
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('7d');
  const [selectedAsset, setSelectedAsset] = useState<AssetType>('All Assets');

  // Select data based on selected period and asset
  const chartData = data[selectedAsset][selectedPeriod];

  // Calculate PnL and current balance
  const startingBalance = chartData[0].balance;
  const endingBalance = chartData[chartData.length - 1].balance;
  const totalPnL = endingBalance - startingBalance;

  // Format values
  const formatCurrency = (value: number): string => {
    const formatted = `$${Math.abs(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
    return value >= 0 ? formatted : `-${formatted}`;
  };

  // Handle period switch
  const handlePeriodSwitch = (period: Period) => {
    setSelectedPeriod(period);
  };

  // Handle asset selection
  const handleAssetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const asset = event.target.value as AssetType;
    setSelectedAsset(asset);
  };

  // Calculate min and max balance for Y-axis domain
  const balanceValues = chartData.map((data) => data.balance);
  const minBalance = Math.min(...balanceValues);
  const maxBalance = Math.max(...balanceValues);
  const midBalance = (minBalance + maxBalance) / 2;
  const dataRange = maxBalance - minBalance;

  // Add padding to the domain to center the chart line
  const yAxisMin = midBalance - dataRange * 1.5;
  const yAxisMax = midBalance + dataRange * 1.5;

  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2>{selectedAsset}</h2>
        <div className="controls">
          <select
            className="asset-select"
            value={selectedAsset}
            onChange={handleAssetChange}
          >
            <option value="All Assets">All Assets</option>
            <option value="Account 1">Account 1</option>
            <option value="Account 2">Account 2</option>
            <option value="Securities">Securities</option>
          </select>
          <div className="period-switch">
            <button
              className={selectedPeriod === '7d' ? 'active' : ''}
              onClick={() => handlePeriodSwitch('7d')}
            >
              7D
            </button>
            <button
              className={selectedPeriod === '30d' ? 'active' : ''}
              onClick={() => handlePeriodSwitch('30d')}
            >
              30D
            </button>
            <button
              className={selectedPeriod === '90d' ? 'active' : ''}
              onClick={() => handlePeriodSwitch('90d')}
            >
              90D
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="widget-chart">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34C759" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#34C759" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" hide />
            <YAxis domain={[yAxisMin, yAxisMax]} hide />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value: number) => [`$${value}`, 'Balance']}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#34C759"
              fill="url(#colorBalance)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* PnL and Balance Summary */}
      <div className="widget-content">
        <div className="pnl-section">
          <span className="pnl-label">{selectedPeriod.toUpperCase()} PnL</span>
          <span
            className={`pnl-value ${totalPnL >= 0 ? 'positive' : 'negative'}`}
          >
            {formatCurrency(totalPnL)}
          </span>
        </div>
        <div className="balance-section">
          <span className="balance-label">Current Balance</span>
          <span className="balance-value">{formatCurrency(endingBalance)}</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceDashboard;
