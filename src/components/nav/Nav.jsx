import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><IoHomeOutline /></a>
      <a href='#about'><TbUserExclamation /></a>
      <a href='#experience'><CgWorkAlt /></a>
      <a href='#resume'><IoDocumentTextOutline /></a>
      <a href='#contact'><RiContactsBook2Line /></a>
    </nav>
  )
}

export default Nav