import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'
import Checkout from './pages/Checkout'

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default Router
