// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componenti
import { GlobalProvider } from './context/GlobalContext';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import ComparePage from './pages/ComparePage';
import FavoritesPage from './pages/FavoritesPage';

// CSS
import './App.css';


function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/cars/:id' element={<CarDetails />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )

}

export default App;