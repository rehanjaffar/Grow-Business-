import hero_icon from '../assets/hero.svg'

const Hero = () => {
  return (
 <div className='bg-[#F5F7FA] min-h-[85vh] flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-24 lg:gap-48'>
<div className='flex flex-col gap-4 p-8'>
    <div className='flex flex-col gap-2'>
    <p className='font-semibold text-5xl'>Lessons and insights</p>
<p className='text-5xl text-green-600 font-semibold'>from 8 years</p>
<p className='text-sm'>Where to grow your business as a photographer: site or social media?</p>
    </div>
<div>
    <button className='px-6 py-3 bg-green-500 hover:bg-teal-400 text-white rounded'>Register</button>
</div>
</div>

<div>
<img src={hero_icon} alt="" />
</div>
    </div>
  )
}

export default Hero