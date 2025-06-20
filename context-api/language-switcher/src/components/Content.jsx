import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const translations = {
    en: {
        greeting: "Welcome to the Language App!",
        button: "Switch to Hindi"
    },
    hi: {
        greeting: "भाषा ऐप में आपका स्वागत है!",
        button: "Switch to English"
    }
};

const Content = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{translations[language].greeting}</h2>
            <button onClick={toggleLanguage}>
                {translations[language].button}
            </button>
        </div>
    );
};

export default Content;
