import Rectangle from '@/public/Rectangle.png'
import Image from 'next/image'




export default function Card() {
  return (
    <div className='flex shadow-lg rounded-md py-2 flex-col w-[290px] '>
    <Image className='rounded-t-md'
    src={Rectangle}
    alt='project picture'
    width={290}/>
    <div className='flex flex-col '>
      <div className='px-[20px] py-[5px]'>
      <div className='flex flex-col mx-auto'>
        <h2 className=' text-[22px] font-semibold font-helvetica text-left'>Smart Home System</h2>
        <p className=' text-[18px] text-left '>Boost efficiency and simplify coding with seamless integration</p>
       
        </div>
         <p className='mt-7 font-light text-[13px]'>-Ryuk Zayn</p>
        <div className='mt-14  text-white space-x-3 text-[11px] '>
            <button className='bg-[#C995F8] rounded-[10px] py-1 px-3'>App Dev </button>
            <button className='bg-[#C995F8] rounded-[10px] py-1 px-3' >npc</button>
        </div>
        </div>
    </div>
    </div>

  )
}
