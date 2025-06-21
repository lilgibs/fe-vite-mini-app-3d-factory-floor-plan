import { Routes, Route } from 'react-router-dom'
import HomeView from './pages/HomeView'
// import FloorPlanView from './pages/floor-plan/FloorPlanView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} >
        {/* <Route path="/floor-plan" element={<FloorPlanView />} /> */}
      </Route>
    </Routes>
  )
}

export default App