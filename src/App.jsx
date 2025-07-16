// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componenti
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
