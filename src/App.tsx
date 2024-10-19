import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Approvals from '@components/approvals/Approvals';
import QuickAccess from '@components/QuickAccess/QuickAccess';
import NewFeaturesWidget from '@components/NewFeaturesWidget/NewFeaturesWidget';
import BalanceDashboard from '@components/balanceDashboard/balanceDashboard';
import ExchangeRates from '@components/exchangeRates/exchangeRates';
import DefaultLayout from '@components/layout/DefaultLayout';
import { theme } from '@plugins/antDesign';

import './App.css';

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <Router>
          <Routes>
            {/* Other routes */}
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Approvals />
                  <QuickAccess />
                  <NewFeaturesWidget />
                  <BalanceDashboard />
                  <ExchangeRates />
                </DefaultLayout>
              }
            />
          </Routes>
        </Router>
      </ConfigProvider>
    </>
  );
}

export default App;
