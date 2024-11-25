// pages/_app.js
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set the Cesium base URL to the correct directory
    if (typeof window !== 'undefined') {
      window.CESIUM_BASE_URL = '/cesium/';
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
