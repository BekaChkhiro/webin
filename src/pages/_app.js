import { useEffect } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import useLanguageStore from '../store/languageStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialize = useLanguageStore(state => state.initialize);
  const initialized = useLanguageStore(state => state.initialized);

  useEffect(() => {
    if (!initialized) {
      initialize();
    }
  }, [initialize, initialized]);

  if (!initialized) {
    return null;
  }

  return (
    <>
      <Component {...pageProps} />
      <LanguageSwitcher />
    </>
  );
}

export default MyApp;
