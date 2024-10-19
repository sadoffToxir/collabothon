import { ConfigProvider } from 'antd';

import DefaultLayout from './components/layout/DefaultLayout'
import { theme } from './plugins/antDesign'

import './App.css'
import NewFeaturesWidget from './components/NewFeaturesWidget/NewFeaturesWidget'
import BalanceDashboard from './components/balanceDashboard/balanceDashboard';
function App() {
  return (
    <ConfigProvider
      theme={theme}
    >
      <div className="App">
        <DefaultLayout />
        <NewFeaturesWidget />
        <BalanceDashboard />
      </div>
    </ConfigProvider>
)
}

export default App
