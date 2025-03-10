import { BrowserRouter, Route, Routes } from "react-router-dom"

// Header component
import { Header } from "./components/Header"

// Views components
import HomeView from "./views/HomeView"
import PlantPotsView from "./views/PlantPotsView"
import PlantsView from "./views/PlantsView"
import CartView from "./views/CartView"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<HomeView />} />
          <Route path="/plantspots" element={<PlantPotsView />} />
          <Route path="/plants" element={<PlantsView />} />
          <Route path="/cart" element={<CartView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router