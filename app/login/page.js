'use client'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [createAccount, setCreateAccount] = useState(false)
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (createAccount) {
                // Account creation flow
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                const docRef = doc(db, 'users', userCredential.user.uid)

                const userData = {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    role: 'user'
                }

                await setDoc(docRef, userData)

                // Handle successful user creation
            } else {
                // Login flow
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                // Handle successful login
            }
        } catch (error) {
            setError(error) // Set error state to display error messages
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user) // Check if user exists
        })

        return () => unsubscribe() // Clean up listener on unmount
    }, [])

    return (
        <div>
            {isLoggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <div>
                    <div className="min-h-screen flex items-center justify-center p-8">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                            <form onSubmit={handleSubmit} className="mb-4">
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="shadow-sm block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="shadow-sm block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                {createAccount && (
                                    <div className="mb-6">
                                        <label
                                            htmlFor="confirm-password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            className="shadow-sm block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                )}
                                <div className="mb-6">
                                    <input
                                        type="checkbox"
                                        id="create-account"
                                        className="mr-2"
                                        onChange={() =>
                                            setCreateAccount(!createAccount)
                                        }
                                    />
                                    <label
                                        htmlFor="create-account"
                                        className="inline-block text-sm font-medium text-gray-700"
                                    >
                                        Create Account
                                    </label>
                                </div>
                                {error && (
                                    <p className="text-red-500 mb-4">
                                        {error.message}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="mb-6 inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-500 active:bg-indigo-700"
                                >
                                    {createAccount
                                        ? 'Create Account'
                                        : 'Log In'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
