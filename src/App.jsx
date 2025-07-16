// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componenti
import { GlobalProvider } from './context/GlobalContext';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

// CSS
import './App.css';


function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )

}

export default App;