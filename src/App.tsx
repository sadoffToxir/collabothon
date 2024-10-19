import { ConfigProvider } from 'antd';

import DefaultLayout from '@components/layout/DefaultLayout'
import { theme } from '@plugins/antDesign'

import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={theme}
    >
      <div className="App">
        <DefaultLayout />
      </div>
    </ConfigProvider>
  )
}

export default App
