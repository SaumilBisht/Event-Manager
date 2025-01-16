import { Eventoz } from "@/icons/Eventoz"
import Image from "next/image"
import Link from "next/link"
interface NavProps{
  title:string

}
//z-index iska zyada so that 
export function NavBar(props:NavProps){
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-white h-24 w-screen text-black p-8 text-2xl font-serif  border-s-slate-400 border-b-2">
        <div className="flex gap-2">
          <Image width={30} height={30} src="../logo.svg" alt="ihfn"></Image>
          <Link href="/"><div className="font-bold">Eventoz</div></Link>

        </div>
        
        <div className="text-5xl font-bold hidden md:block">
           {props.title}
          
        </div>
       
          
        <Link href="/api/auth/signin"><button className="p-1 border-black text-lg text-black border rounded-md font-semibold
         hover:bg-red-600 hover:text-white hover:border-none ">SignOut</button>
         </Link>
        
          
        
      </div>
  )
}