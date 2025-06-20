import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const { isLoggedIn, user, login, logout } = useContext(AuthContext);

    const demoUser = {
        name: 'Ritik',
        email: 'ritik@example.com'
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {isLoggedIn ? (
                <>
                    <h2>Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <h2>Please log in</h2>
                    <button onClick={() => login(demoUser)}>Login</button>
                </>
            )}
        </div>
    );
};

export default Dashboard;
