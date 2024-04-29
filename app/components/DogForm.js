import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { db } from '../firebase'

const DogForm = ({ onDogAdded }) => {
    const [newDog, setNewDog] = useState({
        name: '',
        breed: '',
        age: 0,
        weight: 0,
        description: ''
    })
    const [selectedImage, setSelectedImage] = useState(null)

    const addDog = async (e) => {
        e.preventDefault()

        if (
            newDog.name === '' ||
            newDog.breed === '' ||
            newDog.age === 0 ||
            !selectedImage
        ) {
            alert('Please fill in all fields and select an image.')
            return
        }

        try {
            const storage = getStorage()
            const storageRef = ref(storage, `images/${new Date().getTime()}`) // Using current timestamp for unique file names

            // Upload the file
            const uploadTask = uploadBytesResumable(storageRef, selectedImage)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Optional: Handle file upload progress
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.error('Upload error:', error)
                    alert('Error uploading image')
                },
                async () => {
                    // Handle successful uploads on complete
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    console.log('File available at', downloadURL)

                    // Add the new dog data to Firestore
                    try {
                        await addDoc(collection(db, 'dogs'), {
                            ...newDog,
                            image: downloadURL // Include image URL
                        })

                        // Reset the form
                        setNewDog({
                            name: '',
                            breed: '',
                            age: 0,
                            weight: 0,
                            description: ''
                        })
                        setSelectedImage(null)
                        onDogAdded() // Notify the parent component to refresh the list
                    } catch (error) {
                        console.error('Error adding document: ', error)
                    }
                }
            )
        } catch (error) {
            console.error('Error uploading image: ', error)
            alert('Error processing your request')
        }
    }

    return (
        <div className="bg-white shadow container items-center justify-center w-4/6 mx-auto my-8 flex flex-col px-10 py-5 gap-4 rounded-lg">
            <form onSubmit={addDog}>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Name input */}
                    <div className="w-full md:w-2/3">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setNewDog({ ...newDog, name: e.target.value })
                            }
                            type="text"
                            name="name"
                            value={newDog.name}
                            placeholder="Name"
                        />
                    </div>

                    {/* Breed input */}
                    <div className="w-full md:w-2/3">
                        <label
                            htmlFor="breed"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Breed
                        </label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setNewDog({ ...newDog, breed: e.target.value })
                            }
                            type="text"
                            name="breed"
                            value={newDog.breed}
                            placeholder="Breed"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:flex-row">
                    {' '}
                    {/* Added responsive class */}
                    {/* Age input */}
                    <div className="w-full md:w-2/3">
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Age
                        </label>
                        <input
                            min="1"
                            step="1"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setNewDog({
                                    ...newDog,
                                    age: parseInt(e.target.value)
                                })
                            }
                            type="number"
                            name="age"
                            value={newDog.age}
                            placeholder="Age"
                        />
                    </div>
                    {/* Weight input */}
                    <div className="w-full md:w-2/3">
                        <label
                            htmlFor="weight"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Weight
                        </label>
                        <input
                            min="1"
                            step="1"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setNewDog({
                                    ...newDog,
                                    weight: e.target.value
                                        ? parseInt(e.target.value)
                                        : undefined
                                })
                            }
                            type="number"
                            name="weight"
                            value={newDog.weight || ''}
                            placeholder="Weight"
                        />
                    </div>
                </div>

                {/* Image upload */}
                <div className="w-full md:w-2/3 mx-auto">
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) =>
                            setSelectedImage(
                                e.target.files ? e.target.files[0] : null
                            )
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700"
                    />
                </div>
                {/* Description input */}
                <div className="w-full md:w-2/3 mx-auto">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none min-h-20"
                        placeholder="Enter description here..."
                        onChange={(e) =>
                            setNewDog({
                                ...newDog,
                                description: e.target.value
                            })
                        }
                        value={newDog.description}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="mt-2 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-indigo-500/50 transition duration-150 ease-in-out"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DogForm
