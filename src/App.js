import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader'
const Home = lazy(() => import('./Pages/Home/Home'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))

const App = () => {
  return (

    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App