export function SideBar({username,money}:{username:string , money:number})
{
  return (
    <div className="fixed left-0 top-24 bottom-0 h-screen  flex flex-col justify-start items-start text-black bg-white shadow transition-all w-24 sm:w-32 md:w-48 lg:w-64">
      <div className="p-2 m-2 font-bold font-serif">
        <h1 className="md:text-2xl text-xl mb-2">Hey {username}</h1>
        <div className="md:text-xl text-lg">Balance: ${money}</div>
      </div>
    </div>
  )
}