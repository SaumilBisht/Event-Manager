import Link from "next/link";
import { Input } from "./Input";

export default function MainArea() {
  return (
    <div className="pt-24 pl-64 h-screen flex justify-center items-center text-black bg-slate-100 w-full">
      <div className="flex flex-col -translate-x-12 -translate-y-10">

        <div className="text-2xl font-semibold m-2">
          Enter Event Details:
        </div>
        <Input heading="Event Title" placeholder="Concert"/>
        <Input heading="Venue" placeholder="Siri Fort Stadium"/>
        <Input heading="Start Time" placeholder="21:00"/>
        <Input heading="End Time" placeholder="23:00"/>
        <Input heading="Capacity" placeholder="50"/>
        <Input heading="Price" placeholder="1500"/>

        <div className="text-lg font-bold mt-2 ">Organisation FEE: $500</div>
        <Link href="/">
        <button className="mt-2 w-full p-1 border-black text-lg text-black border rounded-md font-semibold
         hover:bg-red-600 hover:text-white hover:border hover:border-red-600"> Add Event</button>

         
        </Link>
        
      </div>
      
    </div>
  );
}
