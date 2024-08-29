import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext"; // To'g'ri import qilingan
import { Link, useNavigate } from "react-router-dom"; // useNavigate ni to'g'ri import qiling

export default function Signup() {
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
    <div className={`w-screen h-screen bg-bg-image bg-cover flex items-center justify-center`}>
        <div className="backdrop-blur-lg bg-white/10 h-[470px] flex flex-col text-center p-10 rounded-2xl relative">
          <h1 className="mb-5 text-2xl text-white">SIGNUP</h1>
          <form className="flex flex-col gap-3 w-[400px]" onSubmit={handleSubmit}>
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
             <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-1 px-2 rounded-md bg-[#d9d9d9] outline-none h-10"
          />
            <button type="submit" className="py-1 px-2 rounded-md bg-[#00f0ff] h-12">Signup</button>
          </form>
          <h1 className="text-white absolute bottom-5 translate-x-1/2 right-1/2">Already have an account? <Link to='/signin' className="text-[#00f0ff]">Login</Link></h1>
        </div>
    </div>
  );
}

