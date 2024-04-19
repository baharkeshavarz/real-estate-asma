import React from "react"
import { Logo } from "./Logo"
import Menus from "./Menus"
import { UserAccess } from "./UserAccess"

const NavBar = () => {
  return (
    <div className="flex-between fixed z-50 h-16 w-full bg-white px-5">
      <Logo classes="flex items-center gap-1" />
      <div className="flex-center">
        <Menus />
        <UserAccess />
      </div>
    </div>
  )
}

export default NavBar
