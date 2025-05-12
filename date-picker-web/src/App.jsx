import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import PickerPage from './pages/PickerPage'
import SuccessPage from './pages/SuccessPage'
import ResultsPage from './pages/ResultsPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import SharePage from './pages/SharePage'

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <NavBar />}
      <main>{children}</main>
    </>
  )
}

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/:id" element={<PickerPage />} />
        <Route path="/:id/share" element={<SharePage />} />
        <Route path="/:id/submitted" element={<SuccessPage />} />
        <Route path="/:id/results" element={<ResultsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
