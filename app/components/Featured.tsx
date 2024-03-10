import Filter from '@/public/filter.png'
import Image from 'next/image'
import Card from './Card'
import Ellipse from '@/public/Ellipse.png'
import Ellipse6 from '@/public/Ellipse6.png'


export default function Featured() {

    interface Card {
  title: string;
  description: string;
  author: string;
  tags: string[];
}

const baseCard: Card = 
  {
    title: 'Smart Home System',
    description: 'Boost efficiency and simplify coding with seamless integration',
    author: 'Ryuk Zayn',
    tags: ['App Dev', 'npc'],
  }




const cardData: Card[] = Array.from({ length: 12 }, (_, index) => ({
  ...baseCard,
}));


  return (
<div className='mx-8 flex flex-col '>
<div className=' my-6  items-center flex justify-between'>
  <div className=' font-helvetica text-[40px] font-bold overflow-hidden'>
      Featured Projects
    </div>

    <div className='absolute top-[80px] right-[-100px] pl-[100px] '>
    <div className=' ml-[100px] rounded-full w-[300px] h-[300px] bg-[#FCF1E666] z-[-1]   flex items-center justify-center pb-[180px]'>


    <div className='flex space-x-2'>
    <div className='font-bold font'>Filters</div>

    <Image
    src={Filter}
    width={18}
    alt='filter'/>
    </div>
    </div>

    </div>


    </div>
    <div className='grid grid-cols-4 z-10 gap-8'>
      {cardData.map((card,  index) => (
        <div key={index}
        className=''>
          <Card />
          
        </div>
        
      
      ))}
      </div>

        <div className='flex  justify-between'>
        <Image
        src={Ellipse6}
        alt='ellipse'
        className=''
        />

      <button 
      className='text-center self-center mt-[63px] mb-[70px] bg-[#F9DC5C] font-bold p-[10px] px-[25px]'>
      See More</button>
      <div className='bg-[#FCF1E666] w-[300px] h-[300px] rounded-full z-[10]'>
        </div>
 
      </div>
    </div>
  )
}
