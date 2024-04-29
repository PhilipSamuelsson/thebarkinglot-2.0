import React, { useContext } from 'react'
import { AuthContext } from '../../lib/AuthContext'
import { auth } from '../firebase' // Adjust the import path as necessary
import { signOut } from 'firebase/auth'

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
                <a
                    href="/"
                    className="logo font-poppins font-semibold text-2xl"
                >
                    The Barkinglot!
                </a>
            </div>
            <div className="links-container flex gap-5">
                <a href="/dogs" className="link font-poppins font-semibold">
                    Dogs
                </a>
                <a href="/quiz" className="link font-poppins font-semibold">
                    Quiz
                </a>
                <a href="/contact" className="link font-poppins font-semibold">
                    Contact
                </a>

                {isLoggedIn && (
                    <a
                        href="/newStart"
                        className="link font-poppins font-semibold"
                    >
                        New start
                    </a>
                )}
                {/* Conditionally render Log in or Log out based on isLoggedIn */}
                {isLoggedIn ? (
                    <a
                        href="/login"
                        className="link font-poppins font-semibold"
                        onClick={handleLogout}
                    >
                        Log out
                    </a>
                ) : (
                    <a
                        href="/login"
                        className="link font-poppins font-semibold"
                    >
                        Log in
                    </a>
                )}
            </div>
        </div>
    )
}

export default Navbar
