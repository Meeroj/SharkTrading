import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import BgImage from '../../assets/Background.png'

export default function Signin() {
  const { login } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual authentication logic
    const userData = {
      phoneNumber,
      token: 'fake-jwt-token', // Replace with actual token
    };

    login(userData);
    navigate('/dashboard'); // Redirect to home after login
  };

  return (
    <div className={`w-screen h-screen bg-cover flex items-center justify-center bg-[${BgImage}]`}>
      <div className="backdrop-blur-lg bg-white/10 h-[470px] flex flex-col text-center p-10 rounded-2xl relative">
        <h1 className="mb-5 text-2xl text-white">SIGNIN</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[400px]">
          <input
            type="text"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="py-1 px-2 rounded-md bg-[#d9d9d9] outline-none h-10"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-1 px-2 rounded-md bg-[#d9d9d9] outline-none h-10"
          />
          <p className="py-1 px-2 text-white h-7">Forgot password?</p>
          <button type="submit" className="py-1 px-2 rounded-md bg-[#00f0ff] h-12">Signin</button>
        </form>
        <h1 className="text-white absolute bottom-5 translate-x-1/2 right-1/2">
          Don't have an account? <Link to='/signup' className="text-[#00f0ff]">Signup</Link>
        </h1>
      </div>
    </div>
  );
}
