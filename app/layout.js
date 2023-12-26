import localFont from 'next/font/local';
import './globals.css';

import { AppProvider } from './AppContext';

import App from './App';
import Script from 'next/script';

import { GoogleTagManager } from '@next/third-parties/google';



const Aeonik = localFont({
  src: [
    {
      path: './fonts/Aeonik-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Aeonik-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Aeonik-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Aeonik-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-aeonik'
});

export const metadata = {
  title: 'MyMonty',
  description: 'MyMonty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Aeonik.variable}`}>
      {/* <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-09G4DF9L4N' />
      <Script strategy='afterInteractive' id="google-analytics">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-09G4DF9L4N');`
        }
      </Script> */}

      <body className='font-aeonik'>
        <AppProvider>
          <App children={children} />
        </AppProvider>
        <GoogleTagManager gtmId="G-09G4DF9L4N" />
      </body>
    </html>
  )
}
