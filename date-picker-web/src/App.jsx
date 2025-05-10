import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import PickerPage from './pages/PickerPage'
import SuccessPage from './pages/SuccessPage'
import ResultsPage from './pages/ResultsPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/:id" element={<PickerPage />} />
        <Route path="/:id/submitted" element={<SuccessPage />} />
        <Route path="/:id/results" element={<ResultsPage />} />
      </Routes>
    </>
  )
}

export default App
