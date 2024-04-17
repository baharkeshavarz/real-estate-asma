import React from "react"
import { Logo } from "./Logo"
import Menus from "./Menus"
import { UserAccess } from "./UserAccess"

const NavBar = () => {
  return (
    <div className="flex-between h-16 bg-primary-100">
      <Logo />
      <div className="flex">
        <Menus />
        <UserAccess />
      </div>
    </div>
  )
}

export default NavBar
