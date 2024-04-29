import React from 'react'

const Footer = () => {
    return (
        <div className="relative w-full bg-slate-100">
            <div className="container h-fit lg:text-left text-center lg:h-52 flex md:flex-row flex-col justify-between items-center gap-6">
                <div className="">
                    <h4 className="text-2xl font-bold">Contact</h4>
                    <ul>
                        <li className="font-semibold py-2">
                            📞+12 345 678 90 12
                        </li>
                        <li className="font-semibold py-2">🏠Dog street 123</li>
                        <li className="font-semibold py-2">
                            📧Hello@Thebarkinglot.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">Quick links</h4>
                    <ul>
                        <li className="font-semibold py-2">
                            <a href="#" className="underline">
                                FAQ
                            </a>
                        </li>
                        <li className="font-semibold py-2 underline">Donate</li>
                        <li className="font-semibold py-2 underline">
                            Reviews{' '}
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">Socials</h4>
                    <ul className="">
                        <li className="flex py-2 gap-3">
                            <img
                                className="w-7"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                                alt=""
                            />
                            <p className="font-semibold text-base"> Facebook</p>
                        </li>
                        <li className="flex py-2 gap-3">
                            <img
                                className="w-7"
                                src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png"
                                alt=""
                            />
                            <p className="font-semibold text-base">
                                {' '}
                                Instagram
                            </p>
                        </li>{' '}
                        <li className="flex py-2 gap-3">
                            <img
                                className="w-7"
                                src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
                                alt=""
                            />
                            <p className="font-semibold text-base"> X</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-slate-500 py-4">
                The Barkinglot &copy; 2024
            </p>
        </div>
    )
}

export default Footer
