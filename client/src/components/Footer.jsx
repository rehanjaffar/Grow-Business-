import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import logo from '../assets/logo.svg'
import send_icon from '../assets/send_icon.svg'

const Footer = () => {
  return (
    <div className='bg-[#263238] flex flex-wrap items-center justify-center sm:justify-between text-white px-6 md:px-16 py-12 gap-4'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-2'>
            <img src={logo} alt="" />
            <span className='text-xl md:text-2xl lg:text-3xl font-bold'>Nexcent</span>
            </div>
<div>
    <p className='text-sm'>Copyright © 2020 Landify UI Kit.</p>
    <p className='text-sm'>All rights reserved</p>
</div>
<div>
    <ul className='flex gap-3 flex-wrap'>
        <li className='bg-[#717171] p-1 rounded-full hover:scale-150 cursor-pointer transition-all duration-300'>
            <FaInstagram/>
        </li>
        <li className='bg-[#717171] p-1 rounded-full hover:scale-150 cursor-pointer transition-all duration-300'>
            <FaLinkedin/>
        </li>
        <li className='bg-[#717171] p-1 rounded-full hover:scale-150 cursor-pointer transition-all duration-300'>
            <FaTwitter/>
        </li>
        <li className='bg-[#717171] p-1 rounded-full hover:scale-150 cursor-pointer transition-all duration-300'>
            <FaWhatsapp/>
        </li>
    </ul>
</div>
        </div>

        <div className='flex gap-16'>
<div>
<p className='text-xl font-semibold'>Company</p>
<ul className='flex flex-col gap-2 mt-4 '>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>About us</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Blog</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Contact us</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Pricing</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Testimonials</li>
</ul>
</div>
<div>
<p className='text-xl font-semibold'>Support</p>
<ul className='flex flex-col gap-2 mt-4 '>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Help center</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Terms of service</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Legal</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Privacy policy</li>
    <li className='cursor-pointer text-slate-200 hover:text-white transition-all duration-200'>Status</li>
</ul>
</div>
        </div>

        <div className='flex flex-col gap-4'>
        <p className='text-xl font-semibold'>Stay up to date</p>
        <div className='flex justify-between w-64 rounded items-center bg-white bg-opacity-20'>
            <input type="text" className='bg-white bg-opacity-20 flex-1 border-none outline-none p-1' placeholder='Your email address' />
          <img src={send_icon} alt="" className='px-2 cursor-pointer' />
        </div>
        </div>
    </div>

  )
}

export default Footer