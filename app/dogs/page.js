'use client'
import Modal from '../components/Modal'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'
import { db } from '../firebase'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

const page = () => {
    const [dogs, setDogs] = useState([])
    const [newDog, setNewDog] = useState({
        name: '',
        breed: '',
        age: 0,
        weight: 0,
        description: ''
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedDog, setSelectedDog] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    const openModal = (dog) => {
        setSelectedDog(dog)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedDog(null)
    }

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
            const storageRef = ref(storage, `images/${newDog.id}`)

            // Upload the file
            const uploadTask = uploadBytesResumable(storageRef, selectedImage)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // This can be used to show upload progress to the user
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.error('Upload error:', error)
                },
                async () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    console.log('File available at', downloadURL)

                    // Add the new dog data to Firestore
                    try {
                        const docRef = await addDoc(collection(db, 'dogs'), {
                            ...newDog,
                            weight: newDog.weight, // Include weight
                            image: downloadURL, // Include image URL
                            description: newDog.description // Include description
                        })

                        console.log('Document written with ID: ', docRef.id)

                        // Reset the state and clear the image selection
                        setNewDog({
                            name: '',
                            breed: '',
                            age: 0,
                            weight: undefined,
                            description: ''
                        })
                        setSelectedImage(null)
                    } catch (error) {
                        console.error('Error adding document: ', error)
                    }
                }
            )
        } catch (error) {
            console.error('Error uploading image: ', error)
            // Handle errors appropriately, e.g., display an error message to the user
        }
    }

    useEffect(() => {
        const q = query(collection(db, 'dogs'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let dogsArray = []
            querySnapshot.forEach((doc) => {
                const { name, breed, age, ...otherData } = doc.data() // Destructure specific properties
                dogsArray.push({
                    name, // Assign destructured values directly
                    breed,
                    age,
                    id: doc.id, // Add id property explicitly
                    ...otherData // Spread remaining data if needed
                })
            })
            setDogs(dogsArray)
        })
    }, [])

    return (
        <>
            <h1 className="text-4xl font-semibold text-center my-10 h-12">
                Meet your new best friend!
            </h1>
            <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {dogs.map((dog) => (
                    <Card
                        key={dog.id}
                        className="dog-card"
                        onClick={() => openModal(dog)}
                    >
                        <CardHeader>
                            <CardTitle>{dog.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={dog.image} alt={dog.name} />
                        </CardContent>
                        <CardFooter>
                            <CardDescription>{dog.breed}</CardDescription>
                        </CardFooter>
                    </Card>
                ))}
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    dog={selectedDog}
                />
            </div>
        </>
    )
}

export default page
