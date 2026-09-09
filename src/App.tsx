import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ScoresPage from './pages/ScoresPage'
import ShortlistPage from './pages/ShortlistPage'
import SquadsPage from './pages/SquadsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SquadsPage />} />
        <Route path="scores" element={<ScoresPage />} />
        <Route path="shortlist" element={<ShortlistPage />} />
      </Route>
    </Routes>
  )
}

export default App
