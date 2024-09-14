import Home from '../components/Home';
import Usuarios from '../components/Usuarios';
import Reservation from '../components/Reservation'; 
import About from '../components/About';
import CreateReservation from '../components/CreateReservation';
import EditReservation from '../components/EditReservation';

const routes = [
    {
        path: '/',
        element: <Home />,
        protected: false
    },
    {
        path: '/usuarios',
        element: <Usuarios />,
        protected: false
    },
    {
        path: '/reservas',  // Ruta para reservas
        element: <Reservation />,  
        protected: true  // Ruta protegida, requiere autenticación
    },
    {
        path: '/about',
        element: <About />,
        protected: false
    },
    {
        path: '/create-reservation',  // Ruta para crear reserva
        element: <CreateReservation />,
        protected: true  // Ruta protegida, requiere autenticación
    },
    {
        path: '/edit-reservation/:id',  // Ruta para editar reserva
        element: <EditReservation />,
        protected: true  // Ruta protegida, requiere autenticación
    }
];

export default routes;