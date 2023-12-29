import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader'
const LogIn = lazy(() => import('./Pages/Login/Login'))
const Home = lazy(() => import('./Pages/Home/Home'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Men = lazy(() => import('./Pages/Men/Men'))
const Women = lazy(() => import('./Pages/Women/Women'))



const App = () => {
  return (

    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path='/Login' element={<LogIn />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/men' element={<Men />} />
          <Route exact path='/women' element={<Women />} />
          <Route exact path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App