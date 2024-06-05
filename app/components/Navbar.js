import React, { useContext } from 'react'
import { AuthContext } from '../../lib/AuthContext'
import { auth } from '../firebase' // Adjust the import path as necessary
import { signOut } from 'firebase/auth'
import Link from 'next/link'

const Navbar = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error('Failed to log out:', error)
        }
    }

    const { isLoggedIn } = useContext(AuthContext) // Access the isLoggedIn state
    return (
        <div className="navbar  flex items-center justify-between flex-row border-b-2 shadow-xl bg-slate-100 p-5">
            <div className="logo-container">
                <Link
                    href="/"
                    className="logo font-poppins font-semibold text-2xl"
                >
                    The Barkinglot!
                </Link>
            </div>
            <div className="links-container flex gap-5">
                <Link href="/dogs" className="link font-poppins font-semibold">
                    Dogs
                </Link>
                <Link href="/quiz" className="link font-poppins font-semibold">
                    Quiz
                </Link>

                {isLoggedIn && (
                    <Link
                        href="/newStart"
                        className="link font-poppins font-semibold"
                    >
                        New start
                    </Link>
                )}
                {/* Conditionally render Log in or Log out based on isLoggedIn */}
                {isLoggedIn ? (
                    <Link
                        href="/login"
                        className="link font-poppins font-semibold"
                        onClick={handleLogout}
                    >
                        Log out
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        className="link font-poppins font-semibold"
                    >
                        Log in
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
