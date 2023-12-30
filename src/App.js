import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader'
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))
const Home = lazy(() => import('./Pages/Home/Home'))
const About = lazy(() => import('./Pages/About/About'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Product = lazy(() => import('./Pages/Products/Product'))
const ProductDetails = lazy(() => import('./Pages/ProductDetails/ProductDetails'))




const App = () => {
  return (

    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/products' element={<Product />} />
          <Route exact path='/productDetails' element={<ProductDetails />} />
          <Route exact path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App