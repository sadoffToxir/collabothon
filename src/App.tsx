import { ConfigProvider } from 'antd';

import DefaultLayout from './components/layout/DefaultLayout'
import { theme } from './plugins/antDesign'

import './App.css'
import NewFeaturesWidget from './components/NewFeaturesWidget/NewFeaturesWidget'

function App() {
  return (
    <ConfigProvider
      theme={theme}
    >
      <div className="App">
        <DefaultLayout />
        <NewFeaturesWidget />
      </div>
    </ConfigProvider>
)
}

export default App
