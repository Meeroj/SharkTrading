import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center mx-auto px-10 backdrop-blur-lg bg-white/10 absolute w-full">
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
                <div className="flex text-white bg-[#d30e0e] rounded-3xl text-xl">
                    <span className="py-2 px-3">SIGN</span>
                    <div className="rounded-3xl px-3 py-1 text-xl bg-white text-black relative flex items-center gap-3"><Link to={'/signup'}>UP</Link><span className="h-[130%] border border-black rotate-[15deg]"></span><Link to='/signin'>IN</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar