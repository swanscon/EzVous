import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App
