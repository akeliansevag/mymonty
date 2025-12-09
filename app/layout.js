import localFont from 'next/font/local';
import './globals.css';

import { AppProvider } from './AppContext';

import App from './App';

import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

import Canonical from './components/Canonical';




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
      <body className='font-aeonik'>
        <Canonical />
        <AppProvider>
          <App children={children} />
        </AppProvider>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '798074558810216'); 
            fbq('track', 'PageView');
          `}
        </Script>
        
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="3X26HJzNYSURzYfp+MSXKw" async></Script>
        <Script
          id="fw-chat"
          src="//uae.fw-cdn.com/40305316/189078.js"
          strategy="afterInteractive"
          chat="true"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=798074558810216&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
      <GoogleTagManager gtmId="GTM-P934Z29H" />
    </html>
  )
}
