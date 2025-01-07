
import axios from "axios";
import { getServerSession } from "next-auth";

export default async function Home() {

  
}


/*
const session=await getServerSession();
  
  const data = await axios.get("http://localhost:3000/api/user", {
    params: {
      username: session?.user?.name,
    },
  });

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div className="text-white w-96">
                  <div>Name: {session?.user?.name}</div>
                  <div>Money: ${data.data.money}</div>
                  <div>TOKEN: {data.data.token}</div>

                </div>
                
            </div>
        </div>
    </div>
  );

*/