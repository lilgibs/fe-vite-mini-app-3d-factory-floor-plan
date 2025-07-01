import { Routes, Route } from 'react-router-dom'
import HomeView from './pages/HomeView'
import FloorPlanView from './pages/floor-plan/FloorPlanView'
import WelcomeView from './pages/WelcomeView'
import FloorPlanEmbed from './pages/embed/floor-plan/FloorPlanEmbed'

function App() {
  return (
    <Routes>
      <Route path='/embed/floor-plan' element={<FloorPlanEmbed />} key='floor-plan' />
      <Route path="/" element={<HomeView />} >
        <Route index element={<WelcomeView />} />
        <Route path="/floor-plan" element={<FloorPlanView />} />
      </Route>
    </Routes>
  )
}

export default App