import React, { useState } from 'react'

const quizQuestions = [
    {
        question: 'How active are you on a daily basis?',
        answers: [
            { text: 'Very active', points: { Labrador: 3, Husky: 2 } },
            { text: 'Moderately active', points: { Beagle: 2, Bulldog: 3 } },
            { text: 'Not very active', points: { 'Shih Tzu': 3, Bulldog: 2 } }
        ]
    },

    {
        question: 'How much space do you have in your living area?',
        answers: [
            {
                text: 'Large backyard',
                points: { Labrador: 3, Husky: 2, 'Golden Retriever': 1 }
            },
            {
                text: 'Medium-sized yard',
                points: { Beagle: 2, Bulldog: 3, Corgi: 1 }
            },
            {
                text: 'Small apartment',
                points: { 'Shih Tzu': 3, Bulldog: 2, Pomeranian: 1 }
            }
        ]
    },
    {
        question: 'How much time can you dedicate to grooming?',
        answers: [
            {
                text: 'Minimal grooming',
                points: { Labrador: 3, Beagle: 2, Bulldog: 1 }
            },
            {
                text: 'Moderate grooming',
                points: { Husky: 2, 'Shih Tzu': 3, Corgi: 1 }
            },
            {
                text: 'High maintenance grooming',
                points: {
                    'Golden Retriever': 2,
                    Pomeranian: 3,
                    'Bichon Frise': 1
                }
            }
        ]
    },
    {
        question: 'How trainable do you want your dog to be?',
        answers: [
            {
                text: 'Highly trainable',
                points: {
                    Labrador: 3,
                    'Golden Retriever': 2,
                    'Border Collie': 1
                }
            },
            {
                text: 'Moderately trainable',
                points: { Beagle: 2, Bulldog: 3, Corgi: 1 }
            },
            {
                text: 'Less trainable',
                points: { 'Shih Tzu': 3, Pomeranian: 2, 'Bichon Frise': 1 }
            }
        ]
    },

    // Last question
    {
        question: 'What is your favorite type of weather?',
        answers: [
            { text: 'Sunny', points: { Labrador: 2, Beagle: 1 } },
            { text: 'Rainy', points: { Bulldog: 2, 'Shih Tzu': 1 } },
            { text: 'Snowy', points: { Husky: 2, Labrador: 1 } }
        ]
    }
]

const breedInfo = {
    Labrador: {
        description:
            'Labradors are friendly, outgoing, and high-spirited companions with a strong build and a keen sense of smell. They are known for their intelligence and good temper, making them excellent family dogs and versatile in roles like search and rescue, as guide dogs, and in therapy work.',
        imageUrl:
            'https://images.unsplash.com/photo-1529831129093-0fa4866281ee?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    Husky: {
        description:
            'Siberian Huskies are remarkable for their endurance and willingness to work. They have a medium-sized build, erect ears, and a dense coat. Huskies are friendly and gentle, but also alert and outgoing. Originally bred to pull sleds over long distances, they thrive with regular, vigorous exercise.',
        imageUrl:
            'https://images.unsplash.com/flagged/photo-1550973078-10a2d124c99c?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    Beagle: {
        description:
            'Beagles are known for their great sense of smell and tracking instinct, coming in a compact size. They have a gentle disposition, are curious, and friendly, making them great family pets. They enjoy the company of other dogs and humans alike, thriving in an active environment.',
        imageUrl:
            'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    Bulldog: {
        description:
            'Bulldogs are distinguished by their medium-sized, muscular frame, characteristic wrinkled face, and pushed-in nose. Despite their gruff appearance, Bulldogs are known for their loyal and gentle demeanor, making them great companions for families with children.',
        imageUrl:
            'https://images.unsplash.com/photo-1521907554502-7440e4702fc3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    'Golden Retriever': {
        description:
            'Golden Retrievers are friendly, intelligent, and devoted dogs, known for their dense, water-repellant outer coat and patient demeanor. They are one of the most popular breeds for families, eager to please and excellent with children.',
        imageUrl:
            'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    'Shih Tzu': {
        description:
            'Shih Tzus are known for their friendly and outgoing temperament, sporting a long, silky coat. They are affectionate and happy dogs that enjoy being with people. Despite their small size, they have a sturdy build and a big dog attitude, making them a charming companion.',
        imageUrl:
            'https://images.unsplash.com/photo-1589210043112-d4835d91b37a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    Pomeranian: {
        description:
            'Pomeranians are small dogs with a vibrant and curious personality, featuring a fluffy coat and fox-like face. They are active and capable of competing in agility and obedience, but also make affectionate lap dogs. They are alert and aware of changes in their environment.',
        imageUrl:
            'https://images.unsplash.com/photo-1582456891925-a53965520520?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    Corgi: {
        description:
            'Corgis are known for their short stature, strong, athletic build, and an abundance of energy. They are affectionate, smart, and alert, making them excellent companions and watchdogs. Corgis enjoy mental and physical activities and excel in various canine sports.',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1693932897536-c294c8a8ba0a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    'Border Collie': {
        description:
            'Border Collies are highly intelligent and energetic dogs, renowned for their herding skills. They thrive on mental and physical stimulation and are known for their intense stare, used to control sheep. They are eager to learn and work, making them top contenders in dog sports.',
        imageUrl:
            'https://images.unsplash.com/photo-1551097295-4c28e380cdf6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    'Bichon Frise': {
        description:
            'Bichon Frises are small, cheerful dogs known for their white puffy coat and playful demeanor. They are affectionate and get along well with other dogs and children. Bred to be companion dogs, they enjoy being part of the family and do well in various living situations.',
        imageUrl:
            'https://images.unsplash.com/photo-1554634242-a653caa56834?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [scores, setScores] = useState({})
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [topBreed, setTopBreed] = useState('')

    const handleAnswer = (answerPoints) => {
        const updatedScores = { ...scores }
        Object.keys(answerPoints).forEach((breed) => {
            if (!updatedScores[breed]) {
                updatedScores[breed] = 0
            }
            updatedScores[breed] += answerPoints[breed]
        })

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setScores(updatedScores)
        } else {
            // Calculate the top breed
            console.log(updatedScores)
            const highestScoreBreed = Object.keys(updatedScores).reduce(
                (a, b) => (updatedScores[a] > updatedScores[b] ? a : b)
            )
            setTopBreed(highestScoreBreed)
            setQuizCompleted(true)
        }
    }

    if (quizCompleted) {
        const breed = breedInfo[topBreed]
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Your ideal dog breed: {topBreed}
                    </h1>
                    <p className="mb-4">{breed.description}</p>
                    <img
                        src={breed.imageUrl}
                        alt={topBreed}
                        className="max-w-xs mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-4">
                    {quizQuestions[currentQuestion].question}
                </h1>
                <div className="flex flex-col space-y-4">
                    {quizQuestions[currentQuestion].answers.map(
                        (answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(answer.points)}
                                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                {answer.text}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz
