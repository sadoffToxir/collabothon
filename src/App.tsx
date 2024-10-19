import { ConfigProvider } from 'antd';

import Approvals from '@components/approvals/Approvals';
import DefaultLayout from '@components/layout/DefaultLayout';
import NewFeaturesWidget from '@components/newFeaturesWidget/NewFeaturesWidget'
import NewFeaturesWidgetv from '@components/newFeaturesWidget/NewFeaturesWidgetv'
import QuickAccess from '@components/QuickAccess/QuickAccess';
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
          </DefaultLayout>
        </div>
      </ConfigProvider>
      <NewFeaturesWidget />
    </>
  );
}

export default App;
