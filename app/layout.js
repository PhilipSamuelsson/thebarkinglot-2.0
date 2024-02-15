'use client'

import './globals.css'
import Navbar from './components/Navbar'
import { AuthProvider } from '../lib/AuthContext'
import { useContext } from 'react'

export default function RootLayout({ children }) {
    return (
        <html>
            <AuthProvider>
                <Navbar />
                {children}
            </AuthProvider>
        </html>
    )
}
