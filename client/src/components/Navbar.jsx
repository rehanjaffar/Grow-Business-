import logo from '../assets/logo.svg'
import {  FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='p-5 flex justify-between items-center'>
        <div className='flex gap-1 px-8'>
<img src={logo} alt="" />
<span className='text-xl font-bold'>Nexcent</span>
        </div>
        <div className='flex gap-4 px-8 items-center'>
            <div>
                <ul className='list-none hidden lg:flex lg:gap-8'>
                    <li className='hover:bg-green-500 hover:text-white py-1 px-3 cursor-pointer transition-all duration-300'>Home</li>
                    <li className='hover:bg-green-500 hover:text-white py-1 px-3 cursor-pointer transition-all duration-300'>Features</li>
                    <li className='hover:bg-green-500 hover:text-white py-1 px-3 cursor-pointer transition-all duration-300'>Community</li>
                    <li className='hover:bg-green-500 hover:text-white py-1 px-3 cursor-pointer transition-all duration-300'>Blog</li>
                    <li className='hover:bg-green-500 hover:text-white py-1 px-3 cursor-pointer transition-all duration-300'>Pricing</li>
                </ul>
            </div>
            <div className='hidden lg:flex'>
                <button className='flex items-center gap-2 rounded justify-center px-8 py-3 bg-green-500 text-white hover:bg-teal-400'>Register Now <FaArrowRight/> </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar