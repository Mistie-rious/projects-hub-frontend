import Navbar from "@/app/components/Navbar"
import Image from "next/image"
import Rectanglebig from '@/public/Rectanglebig.png'
export default function page() {
  return (
    
    <div>
      <Navbar/>

      <div>
      <Image
      src={Rectanglebig}
      alt="project image"/>
      </div>
      <p></p>
    </div>
  )
}
