import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

const Dashboard = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Panel de Control</h1>
            <p>¡Bienvenido! Solo los usuarios autenticados ven esta página.</p>
            <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
                Cerrar sesión
            </button>
        </div>
    );
};

export default Dashboard;