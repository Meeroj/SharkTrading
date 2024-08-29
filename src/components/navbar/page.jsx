import { Link } from "react-router-dom"
import { useContext } from 'react';
import Logo from "../../assets/logo.png"
import AuthContext from "../../context/AuthContext";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center mx-auto px-10 backdrop-blur-lg bg-white/10 realtive w-full top-0 h-20">
            <div>
                <img src={Logo} alt="Logo" className="w-[119px]" />
            </div>
            <div>
                <ul className="flex justify-between items-center gap-5 text-white">
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div>
            {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div className="text-xl text-white flex gap-2 items-center"><Link to={'/signup'}>SignUp</Link><Link to='/signin' className="px-3 py-1 rounded-md bg-[#ff8a00]">SignIn</Link></div>
      )}
                    
            </div>
        </div>
    )
}

export default Navbar