import { Space_Grotesk, Pacifico } from 'next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/animations.css';
import { useEffect } from 'react';

// Font configuration as specified in the Technical Architecture document
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  // Add class once fonts are loaded to prevent FOUC (Flash of Unstyled Content)
  useEffect(() => {
    document.documentElement.classList.add('fonts-loaded');
  }, []);

  return (
    <main
      className={`${spaceGrotesk.variable} ${pacifico.variable} font-loading`}
    >
      <Component {...pageProps} />
    </main>
  );
}
