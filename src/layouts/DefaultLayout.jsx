// Hooks
import { Outlet } from 'react-router-dom';


// Componenti
import Navbar from '../components/Navbar';



function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;