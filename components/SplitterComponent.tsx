
"use client";

import Splitter, { SplitDirection } from "@devbookhq/splitter";

export default function SplitterComponent() {
  return (
    <div className="h-screen flex pt-24">
      <Splitter  initialSizes={[50, 50]}>

        
        <div className="w-full h-full flex flex-col bg-gray-100 p-4">
          <div className="h-1/2 bg-slate-100 flex justify-center items-center m-2">
            <div className="font-bold text-2xl">Your Events</div>
          </div>
          <div className="h-1/2 bg-slate-100 flex justify-center items-center m-2">
            <div className="font-bold text-2xl">Your Bookings</div>
          </div>
        </div>
        
        <div className="w-full h-full bg-slate-100 flex justify-center items-center p-4">
          <div className="font-bold text-3xl">Upcoming Events</div>
        </div>
      </Splitter>
    </div>
  );
}
