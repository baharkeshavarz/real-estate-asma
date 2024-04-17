import React from "react"
import { Logo } from "./Logo"
import Menus from "./Menus"
import { UserAccess } from "./UserAccess"

const NavBar = () => {
  return (
    <div className="flex-between h-16 bg-secondary-100 px-5">
      <Logo />
      <div className="flex-center">
        <Menus />
        <UserAccess />
      </div>
    </div>
  )
}

export default NavBar
