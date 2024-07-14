import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className='App' style={{ height: '100%', width: '100%' }}>
      <Header />
      <main style={{ height: '100%', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
