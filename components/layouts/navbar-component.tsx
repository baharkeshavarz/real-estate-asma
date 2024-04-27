import React from "react"
import { Logo } from "./logo-component"
import { UserAccess } from "./user-access"
import Menus from "./menus-component"

const NavBar = () => {
  return (
    <div className="flex-between fixed z-50 h-16 w-full bg-white px-2">
      <Logo classes="flex items-center gap-1" />
      <div className="sm:flex-center hidden">
        <Menus />
        <UserAccess />
      </div>

      <div className="flex-start sm:hidden">
        <UserAccess />
        <Menus />
      </div>
    </div>
  )
}

export default NavBar
