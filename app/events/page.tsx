import MainArea from "@/components/MainArea";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/Sidebar";

export default function AddEventPage()
{

  return(
    <div className="">
      <NavBar title="New Event"></NavBar>
      <SideBar username="Saumil" money={10000}></SideBar>
      <MainArea></MainArea>
    </div>

  )
}