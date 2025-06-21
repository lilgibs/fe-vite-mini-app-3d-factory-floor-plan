import { Routes, Route } from 'react-router-dom'
import HomeView from './pages/HomeView'
import FloorPlanView from './pages/floor-plan/FloorPlanView'
import WelcomeView from './pages/WelcomeView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} >
        <Route index element={<WelcomeView />} />
        <Route path="/floor-plan" element={<FloorPlanView />} />
      </Route>
    </Routes>
  )
}

export default App