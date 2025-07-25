import { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!user, // true if user is not null
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;
