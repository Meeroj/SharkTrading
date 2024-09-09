import { FaBars } from "react-icons/fa"

const Sidebar = () => {
    const MenuItem = [
        'Upload',
        'History',
        'Dashboard',
        'Settings'
    ]
    return (
        <div className=" backdrop-blur-lg bg-white/10 w-[17%] rounded-tr-2xl">
           <div className="text-end me-3 mt-3 flex justify-end text-white text-2xl"><span className="cursor-pointer"><FaBars /></span></div>
           <div>
            <ul className="mx-5">
                {MenuItem.map(el=>{
                   return <li className="text-white text-xl hover:bg-slate-400/40 p-3 cursor-pointer rounded-lg">{el}</li>
                    
                })}
            </ul>
           </div>
        </div>
    )
}

export default Sidebar