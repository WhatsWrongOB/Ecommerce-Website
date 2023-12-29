import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App