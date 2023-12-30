import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader'
const Home = lazy(() => import('./Pages/Home/Home'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Product = lazy(() => import('./Pages/Products/Product'))
const ProductDetails = lazy(() => import('./Pages/ProductDetails/ProductDetails'))




const App = () => {
  return (

    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/products' element={<Product />} />
          <Route exact path='/productDetails/:id' element={<ProductDetails />} />
          <Route exact path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App