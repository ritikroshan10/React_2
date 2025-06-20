import AuthProvider from './context/AuthProvider';
import ThemeProvider from './context/ThemeProvider';
import LanguageProvider from './context/LanguageProvider';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Dashboard />
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;