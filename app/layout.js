'use client'

import './globals.css'
import Navbar from './components/Navbar'
import { AuthProvider } from '../lib/AuthContext'
import { useContext } from 'react'
import Footer from './components/Footer'
import NavbarMobile from './components/NavbarMobile'

export default function RootLayout({ children }) {
    return (
        <html>
            <AuthProvider>
                <div className="hidden sm:block">
                    <Navbar />
                </div>
                <div className="block sm:hidden">
                    <NavbarMobile />
                </div>

                <div className="min-h-screen">{children}</div>
                <Footer />
            </AuthProvider>
        </html>
    )
}
