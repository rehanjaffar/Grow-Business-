import client1 from '../assets/client1.svg'
import client2 from '../assets/client2.svg'
import client3 from '../assets/client3.svg'
import client4 from '../assets/client4.svg'
import client5 from '../assets/client5.svg'
import client6 from '../assets/client6.svg'
import client7 from '../assets/client7.svg'

const Clients = () => {
  return (
    <div className='px-6 sm:px-24 py-6 sm:py-12 flex flex-col gap-5 '>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-2xl text-[#4D4D4D] text-center'>Our Clients</p>
            <p className='text-[#4D4D4D] text-sm text-center'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex items-center flex-wrap justify-around'>
            <img src={client1} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client2} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client3} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client4} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client5} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client6} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
            <img src={client7} alt="" className='cursor-pointer hover:bg-teal-300 rounded-full p-2 transition-all'/>
        </div>
    </div>
  )
}

export default Clients