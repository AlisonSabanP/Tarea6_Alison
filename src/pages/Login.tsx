import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';

const Login = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleLogin = () => {
        const fakeToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
            'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzdWFyaW8gVGVzdCIsImV4cCI6MTkwMDAwMDAwMH0.' +
            'abc123def456ghi789jkl012mno345pqr678stu901';

        login(fakeToken);
        navigate('/dashboard', { replace: true });
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h2>Iniciar Sesión</h2>
            <button onClick={handleLogin} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
                Iniciar sesión
            </button>
        </div>
    );
};

export default Login;