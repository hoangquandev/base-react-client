import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <section className="p-[40px_0] bg-white">
            <div className="w-[750px] mx-auto">
                <div className="flex">
                    <div className="w-[900px]">
                        <div className="w-[750px] mx-auto text-center">
                            <div className="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] bg-center h-[400px]">
                                <h1 className="text-center text-[80px]">404</h1>
                            </div>
                            <div className="-mt-[50px]">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not available!</p>
                                <Link to="/" className="text-white p-[10px_20px] bg-[#39ac31] m-[20px_0] inline-block">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NotFound