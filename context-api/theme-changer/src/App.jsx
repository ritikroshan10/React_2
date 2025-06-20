import ThemeProvider from './context/ThemeProvider';
import ThemedComponent from './components/ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
