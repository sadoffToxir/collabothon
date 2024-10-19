import { ConfigProvider } from 'antd';
import './App.css'
import NewFeaturesWidget from './components/NewFeaturesWidget/NewFeaturesWidget'
import DefaultLayout from '@components/layout/DefaultLayout';
import { theme } from '@plugins/antDesign';
import QuickAccess from './components/QuickAccess/QuickAccess';

import './App.css';

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <DefaultLayout />
          <NewFeaturesWidget />
        </div>
      </ConfigProvider>
      <QuickAccess />
    </>
  );
}

export default App;
