import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin ()  {
    return (
        <div className={`w-screen h-screen bg-bg-image bg-cover flex items-center justify-center`}>
            <div className="backdrop-blur-lg bg-white/10 h-[470px] flex flex-col text-center p-10 rounded-2xl relative">
                <h1 className="mb-5 text-2xl text-white">SIGNIN</h1>
                <form className="flex flex-col gap-3 w-[400px]">
                    <input type="text" placeholder="Your phone number" className="py-1 px-2 rounded-md bg-[#d9d9d9] outline-none h-10" />
                    <input type="password" placeholder="Password" className="py-1 px-2 rounded-md bg-[#d9d9d9] outline-none h-10" />
                    <p className="py-1 px-2 text-white h-7">Forgot password?</p>
                    <button type="submit" className="py-1 px-2 rounded-md bg-[#00f0ff] h-12">Signup</button>
                </form>
                <h1 className="text-white absolute bottom-5 translate-x-1/2 right-1/2">Don't have an account? <Link to='/signup' className="text-[#00f0ff]">signin</Link></h1>
            </div>
        </div>
    )
}
