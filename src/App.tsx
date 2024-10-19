import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Approvals from '@components/approvals/Approvals';
import { Kittens } from '@components/Kittens/Kittens';
import DefaultLayout from '@components/layout/DefaultLayout';
import NewFeaturesWidget from '@components/NewFeaturesWidget/NewFeaturesWidget';
import QuickAccess from '@components/QuickAccess/QuickAccess';
import BalanceDashboard from '@components/balanceDashboard/balanceDashboard';
import { theme } from '@plugins/antDesign';

import './App.css';

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/quick-access" element={<QuickAccess />} />
            <Route path='/kittens' element={<Kittens />} />
            <Route
              path="/"
              element={
                <div className="App">
                  <DefaultLayout>
                    <Approvals />
                    <QuickAccess />
                    <NewFeaturesWidget />
                    <BalanceDashboard />
          </DefaultLayout>
                </div>
              }
            ></Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </>
  );
}

export default App;
