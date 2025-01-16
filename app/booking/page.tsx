import { Input } from "@/components/Input";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/Sidebar";
import Link from "next/link";

export default function Booking()
{
  return(
    <div>
      <NavBar title="Book Event"/>
      <SideBar username="Saumil" money={10000}/>

      <div className="pt-24 pl-64 h-screen w-full flex flex-col justify-center items-center text-black bg-slate-100 text-2xl">
        <div>
          <div className="font-bold text-3xl m-2">
            Event Details
          </div>
          <div className="flex flex-col justify-between items-start ">
            <div className="">Title: </div>
            <div className="">Venue: </div>
            <div className="">Start Time: </div>
            <div className="">End Time: </div>
            <div className="">Price: </div>
            <div className="">Capacity: </div>
          </div>
          
            <Input heading="Re-Enter Password:" placeholder="password" type="password"/>
            <Link href="/">
              <button className="mt-2 w-full p-1 border-black text-lg text-black border rounded-md font-semibold
            hover:bg-red-600 hover:text-white hover:border hover:border-red-600">Confirm</button>
            </Link>
          </div>
        </div>
        
    </div>

  )
}