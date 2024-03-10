import Image from 'next/image'
import Logo from '@/public/logo.png'
import Search from '@/public/search.png'
import Link from 'next/link'
import minilogo from '@/public/minilogo.png'
import minibar from '@/public/minibar.png'
import minisearch from '@/public/minisearch.png'

export default function Navbar() {
  return (
    <nav className=' text-[14px] py-3 flex items-center  more:shadow-sm ipod:justify-between ipod:mx-8 justify-around'>
   
    <Image
      className='ipod:hidden'
      src={Logo}
      alt="GDSC Logo"
      width={160}
      height={160}
    />

        <Image
        className='hidden ipod:block'
      src={minilogo}
      alt="GDSC Logo"
    
    />

    
    


<form className=' ipod:hidden'>   
   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-[#89898B] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
        type="search" 
        className="h-[36px] pl-11 w-[434px] outline-none rounded-[50px] placeholder-[#89898b] border text-[#89898B] border-black bg-[#F0F0F1]" 
        placeholder="Search for anything" 
      /> 
      
    </div>
</form>


  <div className='text-[14px] ipod:hidden space-x-7'>
  <Link className='' href="">Home</Link>
  <Link href="">Projects</Link>
  <Link href="">Idea</Link>
  <Link href="">Personal</Link>
  </div>

  <div className=' relative hidden ipod:inline-flex space-x-4 '>
    

        <Image
    src={minisearch}
    alt='mini search'/>


    <Image
    src={minibar}
    alt='mini bar' 
    />


    
  
    
     <div className='bg-bgyellow rounded-full  h-[100px] w-[100px]  absolute right-[-80px] top-[-30px] '></div>
    </div>

<div className='space-x-6 ipod:hidden font-bold'>
  <button className='border  border-black px-4 py-[5px]'>
    <Link href="">Log in</Link>
  </button>

  <button className=' bg-black px-4 py-[5px]  text-white'>
    <Link href="">Sign up</Link>
    </button>
    </div>
 
  </nav>
  )
}
