// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Contesti
import { GlobalProvider } from './context/GlobalContext';


// Layout
import DefaultLayout from './layouts/DefaultLayout';


// Componenti
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

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Pagina di dettaglio */}
            <Route path="/cars/:id" element={<CarDetails />} />

            {/* Pagina di comparazione */}
            <Route path="/compare" element={<ComparePage />} />

            {/* Preferiti */}
            <Route path="/favorites" element={<FavoritesPage />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;