import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import Logo from "../assets/logo.png"

type Props = {}

const SideBar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  console.log(showSidebar);
  return (
    <>
      {
        showSidebar ? (
          <button className="flex text-4xl text-black items-center cursor-pointer fixed left-10 top-6 z-50" onClick={() => setShowSidebar(!showSidebar)}><AiOutlineMenu /></button >
        ) : (
          <button className="flex text-4xl text-black items-center cursor-pointer fixed left-10 top-6 z-50" onClick={() => setShowSidebar(!showSidebar)}>x</button>
        )}
      <div className={`top-0 left-0 z-1 ease-in-out duration-300 w-[20vw] bg-slate-100 p-10 pl-20 text-black fixed h-full ${showSidebar ? "-translate-x-full" : "translate-x-0"}`}>
        <img src={Logo} className="h-16" />
        <div className="py-20">
          <a className="mt-20 text-xl font-semibold text-black" href="/profile">Profile</a>
        </div>
      </div >
    </>


  )
}

export default SideBar
