import LanguageProvider from './context/LanguageProvider';
import Content from './components/Content';

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

export default App;
