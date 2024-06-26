import React, { useContext, useState } from 'react'
import { AuthContext } from '../../lib/AuthContext'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false) // State to track menu open/close

    const handleLogout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error('Failed to log out:', error)
        }
    }

    const { isLoggedIn } = useContext(AuthContext) // Access the isLoggedIn state

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className="navbar shadow-xl flex items-center justify-between flex-row border-b-2 bg-slate-100 p-5">
                <div className="logo-container">
                    <a
                        href="/"
                        className="logo font-poppins font-semibold text-2xl"
                    >
                        The Barkingot!
                    </a>
                </div>
                <div
                    className="hamburger-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </div>
            </div>
            {/* Conditional rendering of the menu */}
            {isMenuOpen && (
                <div className="menu-modal fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col">
                    <div className="menu-header flex justify-between items-center p-5 bg-slate-100 border-b-2 shadow-xl">
                        <div className="logo-container">
                            <Link
                                href="/"
                                className="logo font-poppins font-semibold text-2xl"
                                onClick={handleLinkClick}
                            >
                                The Barkingot!
                            </Link>
                        </div>
                        <div
                            className="close-button"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="links-container flex flex-col justify-center mt-2 items-center gap-7">
                        <Link
                            href="/dogs"
                            className="text-3xl p-1 font-poppins font-semibold"
                            onClick={handleLinkClick}
                        >
                            Dogs
                        </Link>
                        <Link
                            href="/quiz"
                            className="text-3xl p-1 font-poppins font-semibold"
                            onClick={handleLinkClick}
                        >
                            Quiz
                        </Link>

                        {isLoggedIn && (
                            <Link
                                href="/newStart"
                                className="text-3xl p-1 font-poppins font-semibold"
                                onClick={handleLinkClick}
                            >
                                New start
                            </Link>
                        )}
                        {/* Conditionally render Log in or Log out based on isLoggedIn */}
                        {isLoggedIn ? (
                            <Link
                                href="/login"
                                className="text-3xl p-1 font-poppins font-semibold"
                                onClick={() => {
                                    handleLogout()
                                    handleLinkClick()
                                }}
                            >
                                Log out
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="text-3xl p-1 font-poppins font-semibold"
                                onClick={handleLinkClick}
                            >
                                Log in
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
