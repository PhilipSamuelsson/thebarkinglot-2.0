// In components/Modal.js
import React from 'react'

const Modal = ({ isOpen, onClose, dog }) => {
    if (!isOpen) return null

    const handleModalContentClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-10 absolute z-50 rounded-lg w-3/4 max-w-4xl"
                onClick={handleModalContentClick}
            >
                {' '}
                {/* Adjusted padding and width */}
                <h2 className="text-xl font-bold">{dog ? dog.name : ''}</h2>
                {dog && (
                    <img
                        src={dog.image}
                        alt={dog.name}
                        className="my-3 max-h-96 w-full object-cover"
                    />
                )}{' '}
                {/* Adjusted image size */}
                <p>Breed: {dog ? dog.breed : ''}</p>
                <p>Age: {dog ? dog.age : ''}</p>
                <p>Weight: {dog ? dog.weight : ''} lbs</p>
                <p>{dog ? dog.description : ''}</p>
                <button
                    onClick={onClose}
                    className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
