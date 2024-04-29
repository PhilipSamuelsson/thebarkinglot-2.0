import Image from 'next/image'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="bg-white">
            <section className="relative w-full h-screen flex flex-col-reverse lg:flex-row ">
                <div className="lg:w-2/4 w-screen h-screen bg-slate-600 flex p-5 items-center justify-center">
                    <img
                        className="w-4/5 lg:w-3/4 lg:h-3/5 h-4/5 rounded-3xl object-cover shadow-2xl"
                        src="https://images.ctfassets.net/sfnkq8lmu5d7/4YkK1xILTFo5YCra2BAQqB/ffd2680dc8049ec94b2eaeb5f2ceb4ba/The-Wildest_Editorial_Animal-Shelter_Hero_AdobeStock_248142538.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg"
                    />
                </div>
                <div className="lg:w-2/4 w-screen flex h-screen bg-slate-100 flex-col items-center gap-4 justify-center">
                    <h2 className="font-bold p-10 text-3xl lg:text-6xl">
                        {' '}
                        The Barkinglot
                    </h2>
                    <h3 className="font-semibold text-1xl lg:text-left text-center ">
                        {' '}
                        From Barking Lot to Happy Trot, Find Your Furever Friend
                        Here!
                    </h3>
                    <a href="/dogs">
                        <button className="bg-slate-600 mt-10 lg:mt-20 text-white font-bold text-xl p-3 rounded-3xl">
                            {' '}
                            Find a Dog
                        </button>
                    </a>
                </div>
            </section>
            <section className="flex items-center w-screen ">
                {/*           <div className="w-2/4 bg-slate-100 h-screen flex flex-col justify-center items-center px-11 gap-8">
                    <h2 className="font-bold text-2xl"> Our Mission</h2>
                    <p className="font-semibold text-1xl w-1/2">
                        The Barking Lot is a non-profit organization that is
                        dedicated to rescuing and rehoming dogs in need. We
                        believe that every dog deserves a loving home and a
                        second chance. Our mission is to provide a safe and
                        loving environment for dogs in need and to find them
                        their furever homes.
                    </p>
                </div> */}
                <div className="bg-white flex flex-col justify-center items-center gap-8 mx-auto h-fit ">
                    <h2 className="font-bold text-4xl mt-5"> Our Vision</h2>
                    <p className="font-semibold text-1xl w-1/2 lg:w-1/3">
                        Our vision is to create a world where every dog has a
                        loving home and a second chance. We believe that every
                        dog deserves a loving home and a second chance. Our
                        mission is to provide a safe and loving environment for
                        dogs in need and to find them their furever homes.
                    </p>
                    <img
                        className="w-3/4 h-3/5 rounded-full object-cover shadow-2xl mb-9"
                        src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </section>
            <section>
                <div className="w-full bg-slate-600 flex pt-12 flex-col justify-center pb-20">
                    <h2 className="font-bold text-4xl text-white text-center py-5">
                        {' '}
                        Our team
                    </h2>
                    <div className="team-container w-screen lg:w-4/5 flex justify-center lg:flex-row flex-col gap-8 mx-auto items-center">
                        <div class="flex flex-col !w-3/5 lg:w-1/5 mx-auto">
                            <img
                                className=""
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                            <h4 className="text-center text-white text-xl">
                                Stella Wagmore
                            </h4>
                            <h5 className="text-center text-white text-xl">
                                Founder
                            </h5>
                        </div>
                        <div class="flex flex-col !w-3/5 lg:w-1/5 mx-auto">
                            <img
                                className=""
                                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></img>
                            <h4 className="text-center text-white text-xl">
                                Stella Wagmore
                            </h4>
                            <h5 className="text-center text-white text-xl">
                                Founder
                            </h5>
                        </div>
                        <div class="flex flex-col !w-3/5 lg:w-1/5 mx-auto">
                            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <h4 className="text-center text-white text-xl">
                                Stella Wagmore
                            </h4>
                            <h5 className="text-center text-white text-xl">
                                Founder
                            </h5>
                        </div>{' '}
                        <div class="flex flex-col !w-3/5 lg:w-1/5 mx-auto">
                            {' '}
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <h4 className="text-center text-white text-xl">
                                Stella Wagmore
                            </h4>
                            <h5 className="text-center text-white text-xl">
                                Founder
                            </h5>
                        </div>{' '}
                    </div>
                </div>
            </section>{' '}
        </main>
    )
}
