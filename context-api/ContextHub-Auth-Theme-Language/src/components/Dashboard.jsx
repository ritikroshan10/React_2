import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';

const translations = {
    en: {
        welcome: 'Welcome',
        login: 'Login',
        logout: 'Logout',
        theme: 'Toggle Theme',
        language: 'Switch to Hindi'
    },
    hi: {
        welcome: 'स्वागत है',
        login: 'लॉगिन करें',
        logout: 'लॉग आउट करें',
        theme: 'थीम बदलें',
        language: 'अंग्रेज़ी में स्विच करें'
    }
};

const Dashboard = () => {

    const { user, isLoggedIn, login, logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const text = translations[language];
    const demoUser = { name: 'Ritik', email: 'ritik@example.com' };

    const styles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '40px',
        textAlign: 'center',
        minHeight: '100vh'
    };

    return (

        <div style={styles}>
            <h1>{text.welcome} {isLoggedIn && user.name}</h1>
            <button onClick={toggleTheme}>{text.theme}</button>
            <button onClick={toggleLanguage} style={{ marginLeft: '10px' }}>{text.language}</button>
            <div style={{ marginTop: '20px' }}>
                {isLoggedIn ? (
                    <button onClick={logout}>{text.logout}</button>
                ) : (
                    <button onClick={() => login(demoUser)}>{text.login}</button>
                )}
            </div>
        </div>

    );
};

export default Dashboard;
