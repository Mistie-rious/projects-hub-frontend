import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Card from './components/Card'
import picture from '@/public/minipic.png'
import picture1 from '@/public/minipic2.png'
import Image from 'next/image'


export default function Home() {

  return (
    <main className='min-h-screen  max-h-fit'>
      <Navbar/>
      <div className='mx-8 flex flex-col items-center ipod:text-center '>
        <div className='space-y-4 '>
      <h1 className='font-bold text-center text-[36px] my'> Welcome to the project hub!</h1>
      <p className='text-[18px]'>A dynamic platform where creativity meets collaboration! Here, we believe that great ideas flourish when shared. </p>
    
     <div className='relative'>
      <div className='bg-bgyellow rounded-full  h-[154px] w-[154px] -z-10 absolute left-[-110px] top-[-65px] '></div>
      <button className='bg-black px-6 py-[5px] font-semibold text-white'>Learn More</button>
      <button className=' px-6 py-[5px]'> Sign Up</button>
      </div> 
       </div>
      <div className='flex flex-col mt-16'>
        <span>See What's hot!</span>
        <p className='text-[26px] font-semibold'>Popular <span className='text-[#0F9D58]'>Ideas</span></p>
        <div className='space-y-24 flex flex-col items-center  relative'>
        <Card/>
         <div className='bg-bgblue rounded-full  h-[154px] w-[154px] absolute left-[-110px] -z-10 top-[340px] '></div>
        <div className='space-y-2 '>

        <Image 
        src={picture}
        alt='project picture'
        width={337}
        height={229}/>
        <div className='bg-bgblue rounded-full  h-[154px] w-[154px]  absolute  right-[-80px] -z-10  '></div>
        <p className='font-bold text-[22px]'>Discover diverse projects</p>
        <p>Dive into an array of projects ranging from practical solutions to ingenious concepts. </p>
        <button className='bg-yelbutton font-semibold px-6 py-[5px]'>See more</button>
        </div>

        <div className='space-y-2'>
           <div className='bg-bgred rounded-full  h-[154px] w-[154px] -z-10 absolute left-[-130px] '></div>
        <Image
        src={picture1}
        alt='project picture'
        width={337}
        height={229}/>
        <div className='bg-bgred rounded-full  h-[70px] w-[70px] -z-10 absolute right-[-60px] '></div>
        <p className='font-bold text-[22px]'>Bring your ideas to life!</p>
        <p>It's not just about sharing – it's about unleashing your vision into a space where it can evolve and resonate. Share your idea now</p>
         <div className='bg-bgred rounded-full  h-[70px] w-[70px] -z-10 absolute left-[-60px] '></div>
        <button className='bg-yelbutton font-semibold px-6 py-[5px]'>See more</button>
        </div>
        </div>
      </div>

      </div>
    </main>
  )
}
