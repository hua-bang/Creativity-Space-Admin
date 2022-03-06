import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Authorized from './components/Auth/Authorized'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Authorized authority={'admin'} noMatch={null} userInfo={{ currentAuthority: 'admin' }}>
          <button>进入管理后台</button>
        </Authorized>
      </header>
    </div>
  )
}

export default App
