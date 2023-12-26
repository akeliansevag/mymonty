import localFont from 'next/font/local';
import './globals.css';

import { AppProvider } from './AppContext';

import App from './App';


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
        <AppProvider>
          <App children={children} />
        </AppProvider>
      </body>

    </html>
  )
}
