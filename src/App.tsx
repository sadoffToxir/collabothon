import { ConfigProvider } from 'antd';

import Approvals from '@components/approvals/Approvals';
import DefaultLayout from '@components/layout/DefaultLayout';
import NewFeaturesWidget from '@components/newFeaturesWidget/NewFeaturesWidget'
import QuickAccess from '@components/QuickAccess/QuickAccess';
import BalanceDashboard from '@components/balanceDashboard/balanceDashboard';
import { theme } from '@plugins/antDesign';

import './App.css';

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <DefaultLayout>
            <Approvals />
            <QuickAccess />
            <NewFeaturesWidget />
            <BalanceDashboard />
          </DefaultLayout>
        </div>
      </ConfigProvider>
      <NewFeaturesWidget />
    </>
  );
}

export default App;
