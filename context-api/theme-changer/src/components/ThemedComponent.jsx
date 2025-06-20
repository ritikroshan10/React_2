import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext'; //hemeContext in ThemedComponent to access the value you stored inside ThemeProvider.

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
