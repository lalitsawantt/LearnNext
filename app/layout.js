import './globals.css'
import {Poppins} from 'next/font/google';
import Header from './components/header';
const poppins = Poppins({
  weight:['400','700'],
  subsets:['latin']
})

export const metadata = {
  title: 'Lalit Sawant',
  description: 'Learning next js using create-next-app',
  keywords:'web development, web design, web dev, web-dev, web-development, javascript, js, reactjs, react, react-js, html, css, next, nextjs, next-js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
        <main className='container'> 
        {children}
        </main>
        </body>

    </html>
  )
}
